import { Card, CardBody, CardHeader, Avatar } from "@nextui-org/react";

import "./TarjetaPaciente.css";

interface TarjetaPacienteProps {
	imagen?: string;
	nombre?: string;
	fechaUltimoRegistro?: string;
	email?: string;
	celular?: string;
	onClick?: () => void;
}

function TarjetaPaciente(props: TarjetaPacienteProps) {
	return (
		<Card>
			<CardHeader className="card-header">
				<Avatar isBordered radius="lg" src="https://i.pravatar.cc/150?u=a04258114e29026302d" className="avatar-paciente" />
				<div>
					<p className="nombre-paciente">{props.nombre}</p>
					<p className="fecha-registro">{props.fechaUltimoRegistro}</p>
				</div>
			</CardHeader>
			<CardBody>
				<p>Make beautiful websites regardless of your design experience.</p>
			</CardBody>
		</Card >
	);
}

export default TarjetaPaciente