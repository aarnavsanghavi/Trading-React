import React from 'react'
import "./Auth.css"
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Dot, MessageCircle, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import SignUp from './SignUp';
import SignIn from './SignIn';
import ForgotPassword from './ForgotPassword';
import { useLocation, useNavigate } from 'react-router-dom';

export const Auth = () => {
    const navigate = useNavigate(); // Note: lowercase 'n' is conventional for hooks
    const location= useLocation();
    return (
        <div className='h-screen authContainer relative'>
            <div className='absolute inset-0 bg-[#030712] bg-opacity-50 flex items-center justify-center'>
                <div className='bgBlure h-[35rem] w-[30rem] rounded-md z-50 bg-black bg-opacity-50 shadow-2xl shadow-white p-8'>
                    <h1 className='text-6xl font-bold pb-9'>Crypto Edge</h1>
                    {location.pathname == "/signup" ? <section className='w-full'>
                        <SignUp/>
                            <div className='flex items-center justify-center'>
                                <span>Already have an account?</span>
                                <Button 
                                    onClick={() => navigate('/signin')} // Added quotes around '/signin'
                                    variant="ghost"
                                >
                                    SignIn
                                </Button>
                            </div>
                       
                    </section>: location.pathname == "/forgot-password"?<section>
                        <ForgotPassword/>
                        <div className='flex items-center justify-center mt-2'>
                                <span>Back to Login</span>
                                <Button 
                                    onClick={() => navigate('/signin')} // Added quotes around '/signin'
                                    variant="ghost"
                                >
                                    SignIn
                                </Button>
                            </div>
                    </section>
                     :<section>
                        <SignIn/>
                        <div className='flex items-center justify-center'>
                                <span>Don't have an account?</span>
                                <Button 
                                    onClick={() => navigate('/signup')} // Added quotes around '/signin'
                                    variant="ghost"
                                >
                                    SignUp
                                </Button>
                            </div>
                        <div className='mt-10'>
            
                                <Button 
                                    className = "w-full py-5"
                                    onClick={() => navigate('/forgot-password')} // Added quotes around '/signin'
                                    variant="outline"
                                >
                                    Forgot Password
                                </Button>
                            </div>
                        </section>}
                </div>
            </div>
        </div>
    )
}

export default Auth