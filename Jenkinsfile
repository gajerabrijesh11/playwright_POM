pipeline {
    // Use an agent with Docker for a consistent Playwright environment
    agent {
        docker {
            // Using a Playwright-provided Docker image ensures all browsers and dependencies are present
            image 'mcr.microsoft.com/playwright:latest' 
            // Add any necessary arguments, like mounting volumes for reports or increasing memory
            args '--shm-size=1g' 
        }
    }
    
    // Set environment variables if needed
    environment {
        // Use an environment variable to set test workers for parallel execution
        CI = 'true'
    }

    stages {
        stage('Checkout Code') {
            steps {
                // The Docker agent typically handles checkout automatically, but
                // this step is included for clarity in a pipeline structure.
                checkout scm 
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // 'npm ci' installs dependencies based on lock file, making it faster and more reliable than 'npm install' in CI
                sh 'npm ci'
            }
        }
        
        stage('Run Playwright Tests') {
            steps {
                // Execute the Playwright tests using the script defined in package.json
                sh 'npm run test:ci' 
                // Alternatively, if you did not define the script:
                // sh 'npx playwright test --workers=4'
            }
        }
    }
    
    post {
        // Runs always, regardless of the stage result
        always {
            // Archive the Playwright HTML report and JUnit XML report (if configured)
            archiveArtifacts artifacts: 'playwright-report/**, test-results/**, *.xml', fingerprint: true
        }
        // Runs only if a stage failed
        failure {
            echo 'Tests Failed! Check the archived reports for details.'
        }
    }
}