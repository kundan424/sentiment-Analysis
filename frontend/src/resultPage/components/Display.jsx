import React from 'react'
import WordCloudComponent from './WordCloudComponent';
import SentimentChart from './SentimentChart';
import '../styles/display.css'
function Display({ results, sentimentCounts, wordData }) {

    // Calculate summary stats from the results prop
    const totalReplies = results.analysis.length;
    const positiveCount = results.analysis.filter(r => r.sentiment === '1').length;
    const neutralCount = results.analysis.filter(r => r.sentiment === '0').length;
    const negativeCount = results.analysis.filter(r => r.sentiment === '-1').length;


    // helper to map the sentiment value to a lebel and class
    const getSentimentDetails = (sentiment) => {
        switch (sentiment) {
            case '1': return { label: 'Positive', className: 'positive' };
            case '-1': return { label: 'Negative', className: 'negative' };
            default: return { label: 'Neutral', className: 'neutral' };
        }
    };

    return (
        <div className='results'>
            <div className='summary-stats'>
               <div className='card-container'>
                 <div className='stat-card brown'>
                    <div className='stat-label'>Total Comments : </div>
                    <div className='stat-number'>{totalReplies}</div>
                </div>


                <div className='stat-card green'>
                    <div className='stat-label'>Positive : </div>
                    <div className='stat-number'>{positiveCount}</div>
                </div>


                <div className='stat-card blue'>
                    <div className='stat-label'>Neutral : </div>
                    <div className='stat-number'>{neutralCount}</div>
                </div>

                <div className='stat-card red'>
                    <div className='stat-label'>Negative : </div>
                    <div className='stat-number'>{negativeCount}</div>
                </div>
               </div>

                {/* chart and word cloud */}

                <div className='charts-container'>
                    <div className='chart-item'>
                        <h3>Sentiment Distribution</h3>
                        < SentimentChart counts={sentimentCounts} />
                    </div>

                    <div className='chart-item'>
                        <h3>Word cloud</h3>
                        {wordData && wordData.length > 0 ? (
                            <WordCloudComponent words={wordData} />
                        ) : (
                            <p>No words to display</p>
                        )}
                    </div>
                </div>

                {/* individual comments list */}
                <h3>Individual comment list</h3>
                <div className="comments-list">
                    {results.analysis.map((result, index) => {
                        const sentiment = getSentimentDetails(result.sentiment);
                        const commentData = results.comments.find(cmt => cmt.commentId === result.commentId);

                        return (
                            <div key={result.commentId} className='comment-item'>
                                {commentData ? commentData.text : 'Comment text not found.'}
                                <span className={`sentiment-label ${sentiment.className}`}>
                                    {sentiment.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

        </div>
    )
}

export default Display
