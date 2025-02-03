import Form from "next/form";

interface SearchFormProps {
    query?: string;
}

const SearchForm = ({ query }: SearchFormProps) => {
    return (
        <Form action='/' className="flex justify-center items-center w-1/2">
            <input 
                type="text" 
                name="query"
                placeholder="search anime..."
                className="border-red-500 border rounded-full p-0.5 w-full"
                defaultValue={query}
            />
        </Form>
    )
}

export default SearchForm
