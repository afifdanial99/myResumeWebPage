import React from 'react'
import "./ContactStyles.css"
import {MdOutlineSmartphone} from 'react-icons/md'
import {MdEmail} from 'react-icons/md'
import {RxGithubLogo} from 'react-icons/rx'
import {RxLinkedinLogo} from 'react-icons/rx'



const Contact = () => {
  return (
    <div>
        <h1 class="phone"><MdOutlineSmartphone size='20px'/> +60126075208</h1>
        <h2 class="email"><MdEmail size='20px'/> theafifdaniaal@yahoo.com</h2>
        <h3 class="github"><RxGithubLogo size='20px'/><a href="http://github.com/afifdanial99"> github.com/afifdanial99</a></h3>
        <h4 class="linkedin"><RxLinkedinLogo size='20px'/><a href="http://linkedin.com/in/ahmadafifdanial"> linkedin.com/in/ahmadafifdanial</a></h4>
    </div>
  )
}

export default Contact