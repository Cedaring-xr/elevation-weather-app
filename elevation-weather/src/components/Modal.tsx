import React from 'react'

type ModalProps = {
	message: string
}

const Modal: React.FC<ModalProps> = ({ message }) => {
	return (
		<div>
			<h1>title</h1>
			<div>
				<p>message</p>
			</div>
		</div>
	)
}

export default Modal
