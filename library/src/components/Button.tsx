import React from "react"

export type ButtonProps = {
	label: string
	onClick?: () => void
	disabled?: boolean
}

export function Button(props: ButtonProps)
{
	const { label, disabled = false, onClick } = props

	return (
		<button onClick={onClick} disabled={disabled}>{label}</button>
	)
}