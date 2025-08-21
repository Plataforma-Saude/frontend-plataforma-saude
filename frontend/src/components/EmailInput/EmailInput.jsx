export default function EmailInput({
    label,
    name,
    placeholder,
    register,
    disabled,
    errors,
    containerClassName,
    labelClassName,
    inputClassName,
    errorClassName,
}) {
    const hasError = !!errors;

    const errorClasses = 'border-2 border-red-400';

    return (
        <div className={containerClassName}>
            <label className={labelClassName} htmlFor={name}>
                {label}
            </label>

            <input
                className={`${inputClassName} ${hasError ? errorClasses : ''}`}
                type="email"
                id={name}
                name={name}
                placeholder={placeholder}
                disabled={disabled}
                {...register}
            />

            {hasError && (
                <p className={errorClassName}>{errors.message}</p>
            )}
        </div>
    );
}