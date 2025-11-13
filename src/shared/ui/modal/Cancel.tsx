import { useModal } from "./context";

const Cancel = () => {

    const { close } = useModal();

    return (
        <button
            onClick={close}
            className="basis-full max-w-[6rem] bg-neutral-300 hover:brightness-80 rounded-md py-1">
            Cancel
        </button>
    );
}

export default Cancel;