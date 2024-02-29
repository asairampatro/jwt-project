pipeline{
    agent any
    tools{
        maven 'Maven'
    }
    stages{
        stage("Build Maven"){
            steps{
            checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/asairampatro/jwt-project']])
            sh 'mvn clean install'
            }
        }
       
    }
}