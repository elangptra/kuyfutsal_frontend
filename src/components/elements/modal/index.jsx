import React from 'react';
import Button from "../button";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const Modal = ({ isVisible, onClose, type }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-8">
                {type === 'pembayaran' ? (
                <>
                    <div className="flex flex-wrap mb-4">
                        <img src="images/icons/modal-alert.png" alt="Alert-Icon" className="w-[50px] h-[50px]" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <h2 className="text-xl font-medium">Pesanan anda sudah benar?</h2>
                        <p className="text-base font-normal text-slate-500">
                        Anda tidak dapat mengubah detail pesanan setelah
                        <br />melanjutkan ke halaman pembayaran. Tetap lanjutkan?
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-between">
                        <Button
                        type="button"
                        onClick={onClose}
                        classname="bg-transparent border border-slate-500 mb-2 mt-3 text-white hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.2),0_4px_18px_0_rgba(0,0,0,0.2),0_0_8px_rgba(0,0,0,0.2)] transition-all duration-300">
                            <p className="text-black">Cek Ulang</p>
                        </Button>
                        <Button
                        type="button"
                        classname="bg-blue-600 mb-2 mt-3 text-white hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.2),0_4px_18px_0_rgba(0,0,0,0.2),0_0_8px_rgba(0,0,0,0.2)] transition-all duration-300">
                            <Link to="/DetailPembayaran">Ya, lanjutkan!</Link>
                        </Button>
                    </div>
                </>
                ) : type === 'reschedule' ? (
                <>
                    <div className="flex flex-wrap justify-between mb-4">
                        <h2 className="text-xl font-bold">Detail Reschedule & Pembatalan</h2>
                        <button onClick={onClose} className="ml-4">
                            <X />
                        </button>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="border border-black rounded-md bg-transparent p-2 mr-2">
                            <p className="text-base">Reschedule hingga 3 hari sebelum jadwal sewa.</p>
                        </div>
                        <div className="border border-black rounded-md bg-transparent p-2 ml-2">
                            <p className="text-base mb-4">Reservasi tidak dapat dibatalkan dan tidak berlaku refund.</p>
                            <p className="text-red-500">Tidak ada refund</p>
                        </div>
                    </div>
                </>
                ) : type === 'membayar' ? (
                <>
                    <div className="flex flex-col items-center mb-4">
                        <img src="images/icons/modal-alert.png" alt="Alert-Icon" className="w-[50px] h-[50px] mb-4" />
                        <h2 className="text-xl font-bold mb-4">Lakukan Pembayaran</h2>
                        <p className="text-base font-normal text-slate-500 text-center mb-4">
                            Apakah Kamu yakin untuk melakukan pembayaran ini?
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-between">
                        <Button
                            type="button"
                            onClick={onClose}
                            classname="bg-transparent border border-slate-500 mb-2 mt-3 text-white hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.2),0_4px_18px_0_rgba(0,0,0,0.2),0_0_8px_rgba(0,0,0,0.2)] transition-all duration-300">
                            <p className="text-black">Kembali</p>
                        </Button>
                        <Button
                            type="button"
                            classname="bg-blue-600 mb-2 mt-3 text-white hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.2),0_4px_18px_0_rgba(0,0,0,0.2),0_0_8px_rgba(0,0,0,0.2)] transition-all duration-300">
                            <Link to="/VirtualAccount">Ya, lanjutkan!</Link>
                        </Button>
                    </div>
                </>
                ) : type === 'success-verif' ? (
                    <>
                        <div className="flex flex-col items-center mb-4">
                            <img src="images/icons/success-icon.png" alt="Alert-Icon" className="w-[50px] h-[50px] mb-4" />
                            <h2 className="text-xl mb-4">Pembayaran Sudah Terverifikasi</h2>
                            <p className="text-base font-normal text-slate-500 text-center mb-4">
                                Terima kasih sudah menggunakan layanan kami
                            </p>
                            <Button
                                type="button"
                                classname="w-[50%] bg-blue-600 mb-2 mt-3 text-white hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.2),0_4px_18px_0_rgba(0,0,0,0.2),0_0_8px_rgba(0,0,0,0.2)] transition-all duration-300">
                                <Link to="/Homepage">Beranda</Link>
                            </Button>
                        </div>
                    </>
                ) : type === 'error' ? (
                <>
                    <div className="flex flex-col items-center mb-4">
                        <img src="images/icons/error-icon.png" alt="Error-Icon" className="w-[50px] h-[50px] mb-4" />
                        <h2 className="text-xl font-bold mb-4">Terjadi Kesalahan</h2>
                        <p className="text-base font-normal text-red-500 text-center mb-4">
                            Mohon lengkapi data yang diperlukan untuk melanjutkan pembayaran!
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Button
                            type="button"
                            onClick={onClose}
                            classname="bg-red-600 mb-2 mt-3 text-white hover:bg-red-700 transition-all duration-300">
                            <p className="text-white">Tutup</p>
                        </Button>
                    </div>
                </>
                ) : null}
            </div>
        </div>
    );
};

export default Modal;
