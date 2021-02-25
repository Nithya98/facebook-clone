import React from 'react'
import "./StoryReel.css"
import Story from "./Story"

function StoryReel() {
    return (
        <div className="storyReel">
            {/*Story*/}
            <Story 
            image="https://i.ytimg.com/vi/5NlVMTYGlwg/maxresdefault.jpg" 
            profileSrc="https://lh3.googleusercontent.com/ogw/ADGmqu9sXk1XlMGDC-Bp--1XKV1pisihsnpmGF0ZM33eZw=s32-c-mo"
            title="Nithya Shanmugam"/>

            <Story 
            image="https://pbs.twimg.com/media/DjFRXHmUcAA_CVG.jpg" 
            profileSrc="https://lh3.googleusercontent.com/a-/AOh14Ggmh0J-jll3FYhGc66pgpVix9OBNKFZ1pZ-rAn8mQ=s48"
            title="Arivu siddharth"/>

            <Story 
            image="https://i.ytimg.com/vi/wfcWRAxRVBA/maxresdefault.jpg"
            profileSrc="https://lh3.googleusercontent.com/a-/AOh14GjNvxWM6Q_CJoPGq85w3uSIInn-a_s2_a7nY-0UfA=s48"
            title="Hemapratha Elavarasan"/>

            <Story 
            image="https://i.ytimg.com/vi/f3EbDbm8XqY/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD0G9k77XrYACS7YYQgjlm-M4Oifw"
            profileSrc="https://media-exp1.licdn.com/dms/image/C5103AQFDmhyHJVzGQg/profile-displayphoto-shrink_200_200/0/1578320360761?e=1619654400&v=beta&t=M6Cr_waD1Fq94xrrvPiA3cKnrT-m5LpP2IlK7oy4c3U"
            title="Hariram Venkatesh" />

            <Story 
            image="https://i.pinimg.com/originals/de/84/27/de84272a3b222b9ef74b380540fec0b7.jpg" 
            profileSrc="https://lh3.googleusercontent.com/a-/AOh14GhR83f2sKOSCr8iXoMC32UIgOD_L6CHiISo-LdA=s48"
            title="Shashaank Srikanth"/>
            
        </div>
    )
}

export default StoryReel
