pipeline {

    agent {
        label 'any'
    }	
	
    options {		
        // Append time stamp to the console output.
        timestamps()
		
		buildDiscarder(logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '10', daysToKeepStr: '', numToKeepStr: '5'))
		
		disableConcurrentBuilds()
    }	
	
	parameters{  
		string(name: 'AssemblyVersion', defaultValue: '1.0.0.0',description:'Assembly Version')
		booleanParam(name: 'PublishArtifact', defaultValue: false, description:'Publish Artifact')
	}
	
	stages {	
		
		stage('Build Application Code') {  
			steps {										
				dir('QuEst-product') {
				    bat "npm install"
                    bat "npm run ng build"
                }
			}		
		}	

		stage('SonarQube analysis') {
			environment {
            	sqScannerMsBuildHome = tool name: 'PDS Sonar Scanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
            }
			steps{
				script{
					fileName =  getFileName()
					workspace = getWorkspace(pwd())
				}
				
				echo "${sqScannerMsBuildHome}"
				withSonarQubeEnv('Local SonarQube Server') {
					// Due to SONARMSBRU-307 value of sonar.host.url and credentials should be passed on command line
						bat "${sqScannerMsBuildHome}\\bin\\sonar-scanner -Dsonar.organization=kmunjal-bitbucket -Dsonar.projectKey=sep -Dsonar.projectName=Sample.prachi -Dsonar.projectVersion=1.0 -Dsonar.sources=. -Dsonar.sourceEncoding=UTF-8 -Dsonar.inclusions=**/*.ts -Dsonar.exclusions=**/*.html" 
				}
			}
		}
	}	
	post {
        always {
            echo 'Vive Estimation tool build is complete'
//			sendEmail()
			//deleteDir()
        }
        success {
            echo 'Vive Estimation tool build marked as success'
            notifyBitbucketOfBuildStatus('SUCCESS')
        }
        failure {
            echo 'Vive Estimation tool build marked as failure'
            notifyBitbucketOfBuildStatus('FAILURE')
        }
        unstable {
            echo 'Vive Estimation tool build marked as unstable'
            notifyBitbucketOfBuildStatus('UNSTABLE')
        }
    }
}

Boolean needToGenerateArtifact(){
	return (BRANCH_NAME.equals('develop') || BRANCH_NAME.equals('master') || BRANCH_NAME.startsWith('release/')) || params.PublishArtifact
}

String getWorkspace(String workspace){
	return workspace.replace("/","\\")
}

String getZipFileName(){
	return getFileName() + "-package.zip"
}

String getFileName() {
	return BRANCH_NAME.replace("/","-")
}

/**
 * @brief Notifies the BitBucket server of the build status
 * @param buildStatus The status of the build. This value can be one of the following types:
 *    INPROGRESS - The build process is in progress
 *    SUCCESS - The build process completed and all stages were successful
 *    FAILURE - The build process completed and one or more of the stages failed
 *    UNSTABLE - The build had some errors but they were not fatal. For example, some tests failed.
 * @note This function must be called within a node
 */
void notifyBitbucketOfBuildStatus(String buildStatus) {  
   // Let's make sure the #buildStatus we are dealing with is a valid type
   if ((buildStatus == 'INPROGRESS') || (buildStatus == 'FAILURE') || (buildStatus == 'SUCCESS') || (buildStatus == 'UNSTABLE')) {
      /* Convert build status 'FAILURE' or 'UNSTABLE' into 'FAILED' so Bitbucket understands it
      if ((buildStatus == 'FAILURE') || (buildStatus == 'UNSTABLE')) {
         buildStatus = 'FAILED'
      }*/
	  if (buildStatus == 'SUCCESS') {
		 currentBuild.result = 'SUCCESS'
	  }
      // Alright, let's notify the BitBucket server with the status
      echo "INFO: Notifying Bitbucket with build status: ${buildStatus}"
 
      // This step is used to notify BitBucket of the status of the build via the buildStatus
      // parameter. The #credentialsId below should be usable for all Lutron projects on Central Jenkins.
      step(
         [$class: 'StashNotifier',
         credentialsId: '1d93c43f-0288-44de-8b9a-092f624f52ca',
		 considerUnstableAsSuccess: false, 
         disableInprogressNotification: false,
         ignoreUnverifiedSSLPeer: true,
         stashServerBaseUrl: 'https://git.intra.lutron.com']
      )
   } else {
      error "${buildStatus} is not a valid build status value\n   Please check that the build status is specified as INPROGRESS, SUCCESS, UNSTABLE, or FAILURE"
   }
}
