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
                    <h1 className="text-5xl text-black">Amira Izani</h1>
                    <a href="mailto: izani1807@gmail.com">izani1807@gmail.com</a>
                    <hr style={{ border: 0, height: '3px', backgroundColor: '#b8a756' }}></hr>
                    <br></br>
                    <div style={{ textAlign: 'justify', textIndent: '0.5in' }} className = "text-xl"> 
                        <p> Saya adalah mahasiswi ITB jurusan Teknik Informatika. Saya pribadi yang senantiasa 
                            selalu ingin belajar dan berkembang untuk meningkatkan kemampuan saya baik secara teknis 
                            maupun nonteknis. Dengan kepribadian saya, kemampuan saya dapat meningkat dan diharapkan 
                            bisa menjadi individu yang dapat memberi kontribusi dalam Masyarakat.</p> 
                        <br></br>
                        <p> Saya memiliki minat dalam Software Engineering karena dengan belajar di bidang ini saya mampu
                            untuk belajar di rumpun keinformatikaan secara umum. Saya memiliki bakat dalam mengingat dan 
                            menemukan suatu detail dengan suatu pekerjaan yang dijalani</p> 
                        <br></br>
                        <p>Untuk projek yang pernah saya kerjakan sebelumnya, yaitu melalui tugas besar yang diselesaikan selama perkuliahan:</p>
                    </div>
                    <div className = "text-xl">
                        <li>Tugas besar 1 “Sistem Operasi Lift” dalam Mata Kuliah Pengenalan Komputasi 
                            Pada tugas besar ini, dilakukan pemrograman berupa sistem operasi lift. 
                            Dalam program tersebut, terdapat fitur-fitur lift seperti tombol lantai lift, 
                            kapasitas maksimum lift, dan sistem keluar-masuk penumpang lift</li>
                        <li>Tugas besar “Danville Battle” dalam Mata Kuliah Dasar Pemrograman
                            Pada tugas besar ini, dilakukan pemrograman dengan membuat game berupa monster ball. 
                            Beberapa fitur di dalamnya, seperti proses battle, akun user, shop, dan arena battle.</li>
                        <p> Dengan mengerjakan projek-projek tersebut, saya mampu melatih kemampuan programming 
                            saya selama kuliah dan saya mampu menyelesaikan tugas-tugas tersebut tepat waktu.</p> 
                    </div>  
                </div>
            </div>
        </main>
    );
};

export default Home