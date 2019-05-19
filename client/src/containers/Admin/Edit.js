import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getBook,updateBook,clearBook,deletePost} from '../../actions';

class EditBook extends PureComponent {
    state ={
        formdata:{
            _id:this.props.match.params.id,
            name:'',
            auther:'',
            review:'',
            pages:'',
            rating:'',
            price:''
        }
    }

    handleInput = (event,name)=>{
        const newFormdata = {
            ...this.state.formdata
        }
        newFormdata[name]=event.target.value
        this.setState({
            formdata :newFormdata
        })
    }

    submitForm = (e)=>{
        e.preventDefault();
       this.props.dispatch(updateBook(this.state.formdata));
    }

    DeletePost = ()=>{
        this.props.dispatch(deletePost(this.props.match.params.id))
    }

    redirectUser = ()=>{
        setTimeout(()=>{
            this.props.history.push('/user/user-reviews')
        },1000)
    }

    componentWillMount(){
        this.props.dispatch(getBook(this.props.match.params.id))
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        let book = nextProps.books.book;
        this.setState({
            formdata:{
                _id:book._id,
                name:book.name,
                auther:book.auther,
                review:book.review,
               
                pages:book.pages,
                rating:book.rating,
                price:book.price
            }
        })
    }

    componentWillUnmount(){
        this.props.dispatch(clearBook());
    }

    render() {
       let books = this.props.books;
        return (
            <div className="rl_container article">
                <form onSubmit={this.submitForm}>
                    {
                        (books.updateBook)?
                            <div className="edit_confirm">
                                post updated, <Link to={`/books/${books.book._id}`}>Click Here</Link>
                                
                            </div>
                        :null

                    }
                    {
                        (books.postDeleted)?
                      
                        <div className="red_tag">
                            post deleted
                            {this.redirectUser()}
                        </div>
                         :null
                    }
                    <h2>Edit review </h2>

                    <div className="form_element">
                        <input type="text"
                        placeholder="Enter name"
                        value={this.state.formdata.name}
                        onChange = {(event)=> this.handleInput(event,'name')}
                       / >
                    </div>

                      <div className="form_element">
                        <input type="text"
                        placeholder="Enter auther "
                        value={this.state.formdata.auther}
                        onChange = {(event)=> this.handleInput(event,'auther')}
                       / >
                    </div>

                    <textarea value={this.state.formdata.review} 
                     onChange = {(event)=> this.handleInput(event,'review')}
                    />

                       <div className="form_element">
                        <input type="text"
                        placeholder="Enter pages "
                        value={this.state.formdata.pages}
                        onChange = {(event)=> this.handleInput(event,'pages')}
                       / >
                    </div>

                       <div className="form_element">
                            <select value={this.state.formdata.rating}
                             onChange = {(event)=> this.handleInput(event,'rating')}
                            >
                                <option val="1">1</option>
                                <option val="2">2</option>
                                <option val="3">3</option>
                                <option val="4">4</option>
                            </select>    
                        </div>

                       <div className="form_element">
                        <input type="text"
                        placeholder="Enter price "
                        value={this.state.formdata.price}
                        onChange = {(event)=> this.handleInput(event,'price')}
                       / >
                    </div>
                    <button type="submit">Edit Review </button>
                    <div className="delete_post">
                        <div className="button"
                        onClick={this.DeletePost}
                        >
                            Delete Review
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log(state)
    return {
        books:state.books
    }
}

export default connect(mapStateToProps)(EditBook);