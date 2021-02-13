#!/usr/bin/env groovy

def branch = env.BRANCH_NAME
def dockerRegistry = ''
def dockerBaseTag = "${dockerRegistry}"
def dockerImageName = 'html-server'
node("Master") {
    stages {
        stage('Build') { 
            steps {
                def commitId = sh(returnStdout: true, script: 'git rev-parse --short HEAD')
              commitId = commitId.trim()
        dockerVersionTag = "${env.TIMESTAMP}-${commitId}"
        dockerTag = "${dockerBaseTag}${dockerImageName}:${dockerVersionTag}"
        {
            sh """
	    docker build --build-arg BRANCH=$branch -t $dockerTag .
	    docker push $dockerTag"""   // 
            }
        }
    }
   }
}
