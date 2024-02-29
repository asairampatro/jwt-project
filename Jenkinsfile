pipeline{
    agent any
    stages{
        stage("checkout"){
            steps{
                checkout scm
            }
        }

         stage("Build"){
            steps{
                sh "npm run build"
                
            }
         }

        stage("Build Image"){
            steps{
                sh "docker build -t sairampatro/myapp"                
            }
         }

        

    }
}
