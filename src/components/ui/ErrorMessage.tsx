export const ErrorMessage = ({ message }: { message: string }) => (
    <div className="bg-red-100 text-red-700 border border-red-400 p-4 rounded shadow max-w-md mx-auto mt-10">
        <p>{message}</p>
    </div>
);
