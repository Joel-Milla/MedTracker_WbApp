// External components for routing
import { useNavigate } from 'react-router-dom';
// Components to interact with redux
import { useDispatch } from "react-redux";
import { setSelectedUser, setPatientData } from '../state/userSlice';
// External components
import { Button, Card, CardBody, CardHeader, Avatar } from "@nextui-org/react";
import CircleIcon from "@mui/icons-material/Circle";
import { ListItem, List, } from "@mui/material";
// Own components
import BlueDot from "../Dashboard/Symptoms/SymptomList/BlueDot";
import { useEffect, useState } from 'react';

interface TarjetaPacienteProps {
    idDocFirebase: string,
    email: string,
    name: string,
    telefono: string,
    ultimoRegistro: string,
}

function TarjetaPaciente(props: TarjetaPacienteProps) {
    // Use this hook to dispatch actions to redux
    const dispatch = useDispatch();
    // Logic to handle redirection of the user
    const [readyToNavigate, setReadyToNavigate] = useState(false);
    const navigate = useNavigate();


    // Function to handle the onPress of the button
    const handleOnPress = () => {
        // Set the current user to show it on the graph
        dispatch(setSelectedUser(props.email));
        dispatch(setPatientData(props.email));

        // After dispatching the actions, navigate to dashboard
        setReadyToNavigate(true);
    }
    useEffect(() => {
        if (readyToNavigate) {
            navigate('/dashboard');
        }
    }, [readyToNavigate, navigate]);
    return (
        <Card className=' p-2'>
            <CardHeader className="flex">
                <Avatar
                    isBordered
                    radius="lg"
                    src=''
                    className="m-4"
                    // Show the initials of the name
                    name={props.name}
                    showFallback
                    color='primary'
                />
                <div>
                    <p className="text-xl font-bold">{props.name}</p>
                    <p className="text-base text-gray-400  ">
                        Ultimo registro: {props.ultimoRegistro}
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
                        value={props.telefono}
                    />
                </List>
                {/* <Link to='/dashboard'> */}
                {/* Add full width to span all the button even when are inside a link */}
                <Button
                    color="primary"
                    fullWidth
                    onPress={handleOnPress}
                >
                    <strong>Ver detalles</strong>
                </Button>
                {/* </Link> */}
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
