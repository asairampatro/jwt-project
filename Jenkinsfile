pipeline {
    agent any

    tools {
        // Install the Maven version configured as "M3" and add it to the path.
        maven "Maven"
    }

    stages {
        stage('GitHub') {
            steps {
                // Get some code from a GitHub repository
                git 'https://github.com/asairampatro/jwt-project.git'

                // Run Maven on a Unix agent.
                //sh "mvn -Dmaven.test.failure.ignore=true clean package"

                // To run Maven on a Windows agent, use
                // bat "mvn clean install"
            }
        }

        stage('Building image to docker') {
                steps{
                    script {
                         bat "docker build -t sairampatro/myapp ."
                    }
                }
        }

        stage('push image to dockerhub') {
                steps{
                    script {
                        //  withCredentials([string(credentialsId: 'dockerhubpwd', variable: 'dockerhubpwd')]) {
                        //      bat "docker push sairampatro/myapp:latest"
                        // }
                        withCredentials([string(credentialsId: 'dockerhublogin', variable: 'dockerhublogin')]) {
                            bat 'docker login -u rsai6667@gmail.com -p ${dockerhublogin}'
                            bat "docker push sairampatro/myapp"
                        }
                    }
                }
        }
    }
}