import React from 'react';
import styled from 'styled-components';

const Input = ({onsubmit, onFileUpload, value, onchange}) => {
    return (
        <StyledWrapper>
            <div className="messageBox">
                <div className="fileUploadWrapper">
                    <label htmlFor="file">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 337 337">
                            <circle strokeWidth={20} stroke="#6c6c6c" fill="none" r="158.5" cy="168.5" cx="168.5" />
                            <path strokeLinecap="round" strokeWidth={25} stroke="#6c6c6c" d="M167.759 79V259" />
                            <path strokeLinecap="round" strokeWidth={25} stroke="#6c6c6c" d="M79 167.138H259" />
                        </svg>
                        <span className="tooltip"> Upload a .json file of comments</span>
                    </label>
                    <input
                        type="file"
                        id="file"
                        accept='.json'
                        onChange={onFileUpload}
                    />
                </div>

                <input
                    required
                    placeholder="Enter the post url"
                    value={value}
                    type="text"
                    className='!text-black'
                    id="messageInput"
                    onChange={onchange}
                />
                <button id="sendButton" onClick={onsubmit}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 664 663">
                        <path fill="none" d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888" />
                        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="33.67" stroke="#6c6c6c" d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888" />
                    </svg>
                </button>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .messageBox {
    width: fit-content;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fefefeff;
    padding: 0 15px;
    border-radius: 10px;
    border: 1px solid rgb(63, 63, 63);
  }
  .messageBox:focus-within {
    border: 1px solid rgb(110, 110, 110);
  }
  .fileUploadWrapper {
    width: fit-content;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
  }

  #file {
    display: none;
  }
  .fileUploadWrapper label {
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .fileUploadWrapper label svg {
    height: 18px;
  }
  .fileUploadWrapper label svg path {
    transition: all 0.3s;
  }
  .fileUploadWrapper label svg circle {
    transition: all 0.3s;
  }
  .fileUploadWrapper label:hover svg path {
    stroke: #fff;
  }
  .fileUploadWrapper label:hover svg circle {
    stroke: #fff;
    fill: blue;
  }
  .fileUploadWrapper label:hover .tooltip {
    display: block;
    opacity: 1;
  }
  .tooltip {
    position: absolute;
    top: -40px;
    display: none;
    opacity: 0;
    color: white;
    font-size: 10px;
    text-wrap: nowrap;
    background-color: #000;
    padding: 6px 10px;
    border: 1px solid #3c3c3c;
    border-radius: 5px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.596);
    transition: all 0.3s;
  }
  #messageInput {
    width: 200px;
    height: 100%;
    background-color: transparent;
    outline: none;
    border: none;
    padding-left: 10px;
    color: white;
  }
  #messageInput:focus ~ #sendButton svg path,
  #messageInput:valid ~ #sendButton svg path {
    fill: #3c3c3c;
    stroke: white;
  }

  #sendButton {
    width: fit-content;
    height: 100%;
    background-color: transparent;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;
  }
  #sendButton svg {
    height: 18px;
    transition: all 0.3s;
  }
  #sendButton svg path {
    transition: all 0.3s;
  }
  #sendButton:hover svg path {
    fill: #3c3c3c;
    stroke: white;
  }`;

export default Input;
