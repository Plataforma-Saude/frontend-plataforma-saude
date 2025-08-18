export default function EmailInput({label, containerStyle, labelStyle, inputStyle, placeholder}) {
    return(
        <div className={containerStyle}>
            <label className={labelStyle} htmlFor="email">{label}</label>
            <input className={inputStyle} type="email" id="email" placeholder={placeholder} />
        </div>
    )
}