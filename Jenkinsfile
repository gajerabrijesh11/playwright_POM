pipeline {
    // 1. Agent: Specifies where the pipeline will run. Use a Docker image for consistency.
    agent {
        // Use an official Playwright Docker image to ensure browsers are pre-installed
        // This is a best practice to avoid "works on my machine" issues.
        docker {
            image 'mcr.microsoft.com/playwright:latest'
            // Use 'latest' or pin to a specific version, e.g., 'mcr.microsoft.com/playwright:v1.56.1-noble'
            args '-u root' // Add args if Jenkins runs into permission issues inside the container
        }
    }
    
    // 2. Tools: Specify the Node.js installation configured in Global Tool Configuration
    tools {
        // Replace 'NodeJS 18' with the name you used in the Global Tool Configuration
        nodejs 'NodeJS 18' 
    }

    stages {
        stage('Checkout') {
            steps {
                // This step is often implicit when using Pipeline SCM setup, but explicit is clear
                // If using a Multibranch Pipeline, checkout is automatic.
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm ci' // Use npm ci for consistent installation based on package-lock.json
                // If not using a Playwright Docker image, you would need to install browsers:
                // sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                // Run your Playwright tests, typically headless in CI
                sh 'npx playwright test --reporter=junit' // Use JUnit reporter for Jenkins
            }
        }
    }

    post {
        // Post-actions run after the stages are complete
        always {
            // Archive the Playwright HTML report and test results
            archiveArtifacts artifacts: 'playwright-report/**, test-results/**'
        }
        success {
            echo 'Playwright Tests Passed Successfully!'
        }
        failure {
            echo 'Playwright Tests Failed! Check artifacts for reports.'
            // You can also add steps here to publish JUnit reports using the 'junit' step
            // junit 'test-results/results.xml' 
        }
    }
}