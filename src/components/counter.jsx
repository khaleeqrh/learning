import React, { Component } from 'react';
class Counter extends React.Component {
    data=
        {
            id:1,
            Name:'khaleeq',
            description:'asdfjasdfkjasdhfkjhaskjdkafsd',
            price:500,
            discountedPrice:350
        };
    render() { 
        const {id} = this.data;
        return <React.Fragment>
           <div class="jumbotron custom_card_scale_wrapper" style={{margin:'1.2rem 1.2rem 0 1.2rem', padding: '1.25rem 1rem', border: '2px solid darkgray', borderRadius: '2rem'}}>
                    <div class="container">
                        <div class="row">
                            <div class="col-10">
                                <div class="row">
                                    <div class="col-3 text-body">
                                        <strong>Id:</strong>
                                    </div>
                                    <div class="col-9">
                                        <span>{id}</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-3 text-body">
                                        <strong>Name:</strong>
                                    </div>
                                    <div class="col-9">
                                        <span>{this.data.Name}</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-3 text-body">
                                        <strong>Description</strong>
                                    </div>
                                    <div class="col-9">
                                        <span>{this.data.description}</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-3 text-body">
                                        <strong>Price</strong>
                                    </div>
                                    <div class="col-9">
                                        <span>{this.data.price}</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-3 text-body">
                                        <strong>Discounted Price:</strong>
                                    </div>
                                    <div class="col-9">
                                       <span>{this.data.discountedPrice}</span>
                                    </div>
                                </div>
                                {/* <div class="row" style={"margin-top: 0.6rem; margin-bottom: -0.6rem;">
                                    <div class="col-2">
                                        <button data-id="${data[i].id}" onclick="btnDetailOnClick(this);" id="btnDetails" class="btn btn-secondary">@sharedStringLocalizer["Details"]</button>
                                    </div>
                                    <div class="col-2">
                                        <button data-id="${data[i].id}" onclick="btnUpdateOnClick(this);" id="btnUpdate" class="btn btn-info">@sharedStringLocalizer["Update"]</button>
                                    </div>
                                    <div class="col-2">
                                        <button data-id="${data[i].id}" onclick="btnDeleteOnClick(this);" id="btnDelete" class="btn btn-danger">@sharedStringLocalizer["Delete"]</button>
                                    </div>
                                </div> */}
                            </div>
                            {/* <div class="col-2">
                                <div class="row">
                                    <div class="col-12">
                                        <img class="rounded img-thumbnail" width="150" height="150" onerror="this.src='${fallbackImageSvg}'" src="${axios.defaults.baseURL}/${data[i].image.path}" alt="" />
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

            </React.Fragment>;
    }
}
 
export default Counter;