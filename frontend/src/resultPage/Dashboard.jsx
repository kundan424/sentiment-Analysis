import React, { useState } from 'react'
import InputForm from './components/InputForm'
import Display from './components/Display';
import { analyzeSentiments, generateChart, generateWordCloud } from '../api';
import '../resultPage/styles/dashboard.css'
function Dashboard() {
    const [result, setResults] = useState(null);
    const [sentimentCounts, setSentimentCounts] = useState({});
    const [wordData, setWordData] = useState([]);

    const handleAnalysisRequest = async (comments) => {
    try {
        // Check if comments are objects with text property or simple strings
        const commentTexts = comments.map(comment => 
            typeof comment === 'object' && comment.text ? comment.text : comment
        );
        
        console.log('Comments being sent to API:', commentTexts); // Debug log

        // analyze comments (send only the text to the API)
        const analysisResult = await analyzeSentiments(commentTexts);
        
        // Transform the results to include commentId if available
        const transformedResults = {
            comments: comments.map((comment, index) => ({
                commentId: typeof comment === 'object' ? comment.commentId : `comment-${index}`,
                text: typeof comment === 'object' && comment.text ? comment.text : comment
            })),
            analysis: analysisResult.map((item, index) => ({
                commentId: typeof comments[index] === 'object' ? 
                    comments[index].commentId : `comment-${index}`,
                sentiment: item.sentiment
            }))
        };
        
        setResults(transformedResults);

        // 2. prepare sentiment counts
        const counts = { "1": 0, "0": 0, "-1": 0 };
        transformedResults.analysis.forEach((item) => {
            counts[item.sentiment] = (counts[item.sentiment] || 0) + 1;
        });
        setSentimentCounts(counts);

        // 3. fetch the word cloud data (use only text for word cloud)
        console.log('Sending comments to word cloud:', commentTexts); // Debug log
        const wordCloudResponse  = await generateWordCloud(commentTexts);
        console.log('Word cloud response:', wordCloudResponse); // Debug log
        setWordData(wordCloudResponse );
    } catch (error) {
        console.error("Analysis failed", error);
        alert("Something went wrong while analyzing comments!");
    }
};

    return (
        <div className='dashboard'>
            <h1> Sentiment Analysis Dashboard</h1>

            <InputForm onAnalysisRequest={handleAnalysisRequest} />

            {result && (
                <Display
                    results={result}
                    sentimentCounts={sentimentCounts}
                    wordData={wordData}
                />
            )};
            
        </div>
    )
}

export default Dashboard
