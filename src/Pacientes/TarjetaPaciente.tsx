// External components for routing
import { Link } from 'react-router-dom';
// External components
import { Button, Card, CardBody, CardHeader, Avatar } from "@nextui-org/react";
import CircleIcon from "@mui/icons-material/Circle";
import {
    ListItem,
    List,
} from "@mui/material";
// Own components
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
        <Card className=' p-2'>
            <CardHeader className="flex">
                <Avatar
                    isBordered
                    radius="lg"
                    src={props.imagen}
                    className="m-4"
                />
                <div>
                    <p className="text-xl font-bold">{props.nombre}</p>
                    <p className="text-base text-gray-400  ">
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
                <Link to='/dashboard'>
                    {/* Add full width to span all the button even when are inside a link */}
                    <Button color="primary" fullWidth>
                        <strong>Ver detalles</strong>
                    </Button>
                </Link>
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
