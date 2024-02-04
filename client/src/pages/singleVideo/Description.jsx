import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";


const Description = () => {
    return (
        <div>
            <h1 className="text-lg font-semibold tracking-tight text-slate-800">Next.js 14 Full Course 2024</h1>

            <div>
                <p className="text-sm leading-[1.72] text-slate-600 w-full">uploaded May 5, 2023</p>
                <div>
                    <Link>
                    <div className="flex gap-2">
                        <FaEdit />
                        <FaTrashAlt />
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Description;