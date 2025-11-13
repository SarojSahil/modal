import { useModal } from "./context";

const Confirm = () => {

    const {close} = useModal();

    return (
        <button
            onClick={close}
            className="basis-full max-w-[6rem] bg-sky-500 text-white hover:brightness-90 rounded-md py-1">
            Confirm
        </button>
    );
}

export default Confirm;