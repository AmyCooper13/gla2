pipeline {
    agent any
    enviroment{
        NETLIFY_SITE_ID'24a47601-7661-414d-8d72-2329a83e89d4'
        NETLIFY_AUTH_TOKEN = credentials('GLA2Token')
    }

    stages {
        stage('Build') {
            agent{
                docker{
                    image 'node:20.15.0-slim'
                    reuseNode true
                }
            }
            steps {
                sh '''
                ls -la
                node --version
                npm --version
                npm install
                npm run build
                ls -la
                '''
            }
        }
        stage('Test'){
            agent{
                docker{
                    image 'node:20.15.0-slim'
                    reuseNode true
                }
            }
            steps{
                sh '''
                test -f build/index.html
                npm test
                '''
            }
        }
        stage('deploy'){
             agent{
                docker{
                    image 'node:20.15.0-slim'
                    reuseNode true
                }
            }
            steps{
                sh'''
                npm install netlify-cli
                node_modules/.bin/netlify --version
                echo "Deploying to production. Site ID:$NETLIFY_SITE_ID"
                node_modules/.bin/netlify status
                node_modules/.bin/netlify deploy --prod --dir=build
                '''
            }
        }
    }
}