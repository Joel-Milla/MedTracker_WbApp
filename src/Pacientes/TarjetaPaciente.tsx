import { Button, Card, CardBody, CardHeader, Avatar } from "@nextui-org/react";
import CircleIcon from "@mui/icons-material/Circle";
import {
    ListItem,
    ListItemIcon,
    ListItemText,
    List,
    Typography,
} from "@mui/material";

import "./TarjetaPaciente.css";
import BlueDot from "../Dashboard/Symptoms/SymptomList/BlueDot";

interface TarjetaPacienteProps {
    id: number;
    imagen: string;
    nombre: string;
    fechaUltimoRegistro: string;
    email: string;
    celular: string;
}

function TarjetaPaciente(props: TarjetaPacienteProps) {
    return (
        <Card className="tarjeta-paciente">
            <CardHeader className="card-header">
                <Avatar
                    isBordered
                    radius="lg"
                    src={props.imagen}
                    className="avatar-paciente"
                />
                <div>
                    <p className="nombre-paciente">{props.nombre}</p>
                    <p className="fecha-registro">
                        {props.fechaUltimoRegistro}
                    </p>
                </div>
            </CardHeader>
            <CardBody>
                <List>
                    <ListItemElement
                        icon={CircleIcon}
                        text="Email: "
                        value={props.email}
                    />
                    <ListItemElement
                        icon={CircleIcon}
                        text="Teléfono: "
                        value={props.celular}
                    />
                </List>
                <Button color="primary">
                    <strong>Ver detalles</strong>
                </Button>
            </CardBody>
        </Card>
    );
}

function ListItemElement(props: { icon: any; text: string; value: string }) {
    return (
        <ListItem key={props.text} disablePadding>
            <BlueDot />
            <p className="font-semibold">&nbsp;{props.text}&nbsp;</p>
            <p>{props.value}</p>
            {/* <ListItemIcon sx={{ color: "primary.main" }}>
                {<props.icon fontSize="xs" />}
            </ListItemIcon>
            <ListItemText
                primary={
                    <>
                        <Typography
                            variant="body1"
                            component="span"
                            fontWeight="bold"
                        >
                            {props.text}
                        </Typography>
                        <Typography
                            variant="body1"
                            component="span"
                            color="text.secondary"
                        >
                            {props.value}
                        </Typography>
                    </>
                }
            /> */}
        </ListItem>
    );
}

export default TarjetaPaciente;
