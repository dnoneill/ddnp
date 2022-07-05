import { h } from "preact";

export default function Footer() {
    return (
        <footer className="flex justify-center items-center my-12 border-solid border-t-2 border-ddnpblue">
            <p className="text-center text-gray-500 text-md mt-6">
                &copy; {new Date().getFullYear()} Digital Dickens Notes Project
            </p>
        </footer>
    );
}


