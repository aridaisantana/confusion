import React, { Component } from 'react';
import { Card, CardImg,  CardText, CardBody, CardTitle } from 'reactstrap';
class DishDetail extends Component{


    renderDish(dish){
       
       
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
        
    }

    renderComments(comments){
        
        if( comments != null){
            const commentsMenu = comments.map((comment) => {
                return(
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>{`-- ${comment.author} , ${new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}`}</p>
                            
                        </li>
                    
                );
            
            });

            return <ul className = "list-unstyled">{commentsMenu}</ul>;
        }else{
            return(
                <div></div>
            );
        }

    }

    render(){

        if( this.props.dish != null){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 mt-1">
                        {this.renderDish(this.props.dish)}
                        </div>
                        <div className="col-12 col-md-5 mt-1">
                            <h4>Comments</h4>
                            {this.renderComments(this.props.dish.comments)}
                        </div>
                    </div>
                </div>  
            );
        }else{
            return(
                <div></div>
            );
        }
        
    }
}

export default DishDetail;