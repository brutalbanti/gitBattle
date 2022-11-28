import React, { memo } from "react";
const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python']

const SelectedLanguage = memo((props) => {
    return (
        <ul className="languages">
            {languages.map((language, index) => {
                return (
                    <li
                        key={index}
                        style={language === props.selectedLanguage ? { color: '#d0021b' } : null}
                        onClick={props.updateLanguage}>
                        {language}
                    </li>
                )
            })}
        </ul>
    )
})

export default SelectedLanguage;