export default function PasswordInput({label, containerStyle, labelStyle, inputStyle, placeholder}) {
    return(
        <div className={containerStyle}>
            <label className={labelStyle} htmlFor="password">{label}</label>
            <input className={inputStyle} type="password" id="password" placeholder={placeholder} />
        </div>
    )
}