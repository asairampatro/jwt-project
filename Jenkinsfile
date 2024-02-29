pipeline{
    agent any
    tools{
        maven 'Maven'
    }
    stages{
        stage("SCM Checkout"){
            steps{
            checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/asairampatro/jwt-project']])
            }
        }
        stage("Maven Build"){
            steps{
                bat 'mvn clean package'
            }
        }
    }
}