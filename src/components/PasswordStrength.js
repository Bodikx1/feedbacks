import React from 'react'
import zxcvbn from 'zxcvbn'

export default function PasswordStrength({password}) {
    const result = zxcvbn(password)
    const num = result.score * 100 / 4

    function StrengthPassLable() {
        switch (result.score) {
            case 0 :
                return 'Очень простой';
            case 1:
                return 'Простой';
            case 2 :
                return 'Средний';
            case 3:
                return 'Хороший';
            case 4:
                return 'Сложный';
            default:
                return 'none'
        }
    }

    function ProgressColor() {
        switch (result.score) {
            case 0 :
                return '#828282';
            case 1:
                return '#EA1111';
            case 2 :
                return '#FFAD00';
            case 3:
                return '#9bc158';
            case 4:
                return '#00b500';
            default:
                return 'none'
        }
    }

    const ChangePasswordColor = () => ({
        transition: 'width 500ms',
        width: `${num}%`,
        background: ProgressColor(),
        height: '7px',
        borderRadius: '4px',
    })
    return (
        <>
            <div className='progress' style={{
                marginTop: '5px',
                width: '350px',
                height: '7px',
                backgroundColor: 'lightgrey',
                borderRadius: '4px'
            }}>
                <div className='progress-bar' style={ChangePasswordColor()}></div>
            </div>
            <p style={{color: ProgressColor() , width:'350px'}}>{StrengthPassLable()}</p>
        </>
    )
}