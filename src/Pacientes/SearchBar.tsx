import { Autocomplete, AutocompleteItem, Avatar, Button } from "@nextui-org/react";
import SearchIcon from '@mui/icons-material/Search';
import { data } from "./Paciente";

function SearchBar() {
	return (
		<Autocomplete
			classNames={{
				base: "max-w-xs",
				listboxWrapper: "max-h-[320px]",
				selectorButton: "text-default-500"
			}}
			defaultItems={data}
			inputProps={{
				classNames: {
					input: "ml-1 border-primary rounded-lg",
					inputWrapper: "h-[48px]",
				},
			}}
			listboxProps={{
				hideSelectedIcon: true,
				itemClasses: {
					base: [
						"rounded-medium",
						"text-default-500",
						"transition-opacity",
						"data-[hover=true]:text-foreground",
						"dark:data-[hover=true]:bg-default-50",
						"data-[pressed=true]:opacity-70",
						"data-[hover=true]:bg-default-200",
						"data-[selectable=true]:focus:bg-default-100",
						"data-[focus-visible=true]:ring-default-500",
					],
				},
			}}
			aria-label="Selecciona a un paciente"
			placeholder="Ingresa un nombre"
			popoverProps={{
				offset: 10,
				classNames: {
					base: "rounded-large",
					content: "p-1 border-small border-default-100 bg-background",
				},
			}}
			startContent={<SearchIcon fontSize="small" />}
			radius="full"
			variant="bordered"
		>
			{(item) => (
				<AutocompleteItem key={item.id} textValue={item.nombre}>
					<div className="flex justify-between items-center">
						<div className="flex gap-2 items-center">
							<Avatar alt={item.nombre} className="flex-shrink-0" size="sm" src={item.imagen} />
							<div className="flex flex-col">
								<span className="text-small">{item.nombre}</span>
							</div>
						</div>
					</div>
				</AutocompleteItem>
			)}
		</Autocomplete>
	);
}


export default SearchBar;