import React, { Component } from "react";
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Icon
} from "@material-ui/core";

class MessageContent extends Component {
  state = {
  };

  render() {
    
    return (
      <div className="content">
        <div className="flex flex-middle message-header">
          <div className="avatar-container">
            <img src="/assets/images/face-1.jpg" alt="" className="header-avatar"/>
            <span className="member-count">+3</span>
          </div>
          <div className="flex flex-column ml-16">
            <span className="people">Tato Beqtashashvilli, Jonathan Calmus, +1</span>
            <span className="team">Marketing Team</span>
          </div>
        </div>
        <div className="message-container">
          <div className="message">
            <div className="time-container">
              <img src="/assets/images/face-7.jpg" alt="" className="message-avatar" />
              <span className="time">12:13</span>
            </div>
            <div className="message-content">
              <div className="chat-content">
                Lorem lpsum is simply dummy text of the printing and typesetting industry.
                Lorem lpsum has been
              </div>
            </div>
          </div>
          <div className="message right">
            <div className="time-container">
              <img src="/assets/images/face-7.jpg" alt="" className="message-avatar" />
              <span className="time">12:13</span>
            </div>
            <div className="message-content">
              <div className="chat-content">
                Please move a socotter to it's destination
                <span className="style-text"> @Scotter1</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-middle">
          <TextField
            label="Type your message here*"
            // value={message}
            fullWidth
            multiline={true}
            rows={1}
          />
          <div className="flex flex-middle">
            <Button className="chat-action">
              <img src="/assets/images/notification/pin.svg" alt="" />
            </Button>
            <Button className="chat-action">
              <img src="/assets/images/notification/attach.svg" alt="" />
            </Button>
            <Button className="chat-action">
              <img src="/assets/images/notification/send.svg" alt="" />
            </Button>
          </div>
        </div>
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="It's a task"
          className="my-20"
        />
        <div className="flex flex-middle">
          <div className="flex flex-middle upload-file">
          <span className="file-name">someFile.docx</span>
          <Icon className="close">close</Icon>
          </div>
        </div>
      </div>      
    );
  }
}

export default MessageContent;