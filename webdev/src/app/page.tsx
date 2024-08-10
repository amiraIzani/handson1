import Image from "next/image";

const Home = () => {
    return (
        <main style = {{ backgroundColor: '#fffbe7' }} className="min-h-screen">
            <div className="flex flex-row justify-start items-start p-4 gap-10">
                <Image 
                    src={"/foto-13523143.jpg"}
                    alt="foto diri"
                    width = {400}
                    height = {600}
                ></Image>
                <div className="flex flex-col font-serif text-black">
                    <h1 className="text-5xl">Amira Izani</h1>
                    <hr></hr>
                    <h2 className = "text-xl p-10">Jurusan Teknik Informatika</h2>         
                </div>
            </div>
        </main>
    );
};

export default Home