import { Button } from '@material-ui/core';
import React from 'react';
import SendIcon from '@material-ui/icons/Send';

const FeedBack = () => {
    return (
        <div className="p-3 mx-auto  shadow bg-light rounded">
            <h4 className="card-title text-info text-center my-4">Give us Feedback</h4>

            <form action="#" onSubmit={e =>e.preventDefault()}>
                <div className="form-group">
                    <label className="h5" htmlFor="name">Name</label>
                    <input type="text" className="form-control" name="name" id="name" placeholder="Enter your name"  autoComplete="off"/>
                </div>
                <div className="form-group">
                    <label className="h5" htmlFor="email">Email<sup>*</sup></label>
                    <input type="email" className="form-control" name="email" id="email" placeholder="Enter your email" required autoComplete="off" />
                </div>
                <div className="form-group">
                    <label htmlFor="comment" className="h5">Comment<sup>*</sup></label>
                    <textarea className="form-control" name="comment" id="comment" rows="5" placeholder="Write your query about us"  autoComplete="off" required></textarea>
                </div>
                <div className="form-group text-center">
                    <Button type="submit" variant="contained" color="primary" endIcon={<SendIcon />} >Send</Button>
                </div>
            </form>

        </div>
    );
};

export default FeedBack;