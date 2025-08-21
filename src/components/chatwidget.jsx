import axios from 'axios';
import { useState, useEffect } from 'preact/hooks';

export default function ChatWidget() {
    const [showBot, setShowBot] = useState(true);
    const [open, setOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState(false);
    const [openChat, setOpenChat] = useState(false);
    const [openAgent, setOpenAgent] = useState(false);
    const [users, setUsers] = useState([{ name: 'John' }]);
    // const [payload, setPayload] = useState("");

    const handleOpen = () => {
        setOpen(val=>!val);
    };

    const handleOpenFaq = () => {
        setOpen(false);
        setOpenFaq(true);
    };

    const handleOpenChat = () => {
        setOpen(false);
        setOpenChat(true);
        setShowBot(false);
    };

    const handleOpenAgent = () => {
        setOpenFaq(false);
        setOpenAgent(true);
        setShowBot(false);
    };

    useEffect(() => {
        ; (async function () {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users")
            setUsers(res.data);
        })();
        let payload = document.getElementById("my-script")?.getAttribute("data-payload") || "hi";
        // setPayload(id);
        console.log("payload id: " + payload)
    },[])

    return (
        <div>
            {showBot && (
                <div
                    className="chat-icon"
                    aria-live="polite"
                    aria-label="Chat"
                    role="button"
                    tabIndex="0"
                    onClick={handleOpen}
                    onKeyDown={(e) => e.key === 'Enter' && handleOpen()}
                >
                    <svg width="75" height="68" viewBox="0 0 75 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_8673_2670)">
                            <ellipse cx="37.5002" cy="30" rx="25.1296" ry="21.6667" fill="white" />
                            <path d="M37.5002 4C21.2078 4 8 15.6409 8 30.0002C8 37.3989 11.5062 44.0755 17.1343 48.81C17.0623 51.0675 16.2932 53.302 14.9482 55.0939C17.5558 54.9875 20.1101 53.9229 22.0741 52.1664C26.5625 54.598 31.8457 56.0004 37.5002 56.0004C53.7926 56.0004 67.0004 44.3595 67.0004 30.0002C67.0004 15.6409 53.7926 4 37.5002 4ZM55.8352 42.599C54.748 43.8262 53.1989 44.516 51.5813 44.516H23.4191C21.8015 44.516 20.2524 43.8262 19.1652 42.599C16.0867 39.1239 14.2522 34.7507 14.2522 29.9998C14.2522 25.249 16.0863 20.8761 19.1648 17.401C22.5117 13.622 27.3739 10.5 37.5 10.5C45.948 10.5 52.7599 13.9097 55.8733 17.4436C58.9292 20.9115 60.7482 25.2685 60.7482 29.9994C60.7482 34.7303 58.9137 39.1239 55.8352 42.599Z" fill="url(#paint0_linear_8673_2670)" />
                            <path d="M31.2311 29.1936C30.3741 30.545 29.1376 29.1936 26.5542 29.1936C23.9707 29.1936 22.7346 30.545 21.8776 29.1936C21.0482 27.8852 23.3365 24.6578 26.5542 24.6578C29.7718 24.6578 32.0602 27.8856 31.2311 29.1936Z" fill="#46359D" />
                            <path d="M53.1223 29.1936C52.2653 30.545 51.0287 29.1936 48.4453 29.1936C45.8618 29.1936 44.6257 30.545 43.7687 29.1936C42.9393 27.8852 45.2276 24.6578 48.4453 24.6578C51.6629 24.6578 53.9513 27.8856 53.1223 29.1936Z" fill="#46359D" />
                            <path d="M37.4996 35.3421C35.6966 35.3421 34.5071 33.8776 34.4573 33.8155C34.1879 33.4777 34.2365 32.9798 34.5662 32.7038C34.8959 32.4278 35.382 32.4776 35.6515 32.8153C35.6565 32.8213 36.4381 33.7621 37.4996 33.7621C38.5612 33.7621 39.3427 32.8213 39.3505 32.8118C39.62 32.474 40.1045 32.4258 40.4342 32.7018C40.7639 32.9779 40.8114 33.4773 40.5415 33.8151C40.4918 33.8776 39.3023 35.3417 37.4992 35.3417L37.4996 35.3421Z" fill="#46359D" />
                        </g>
                        <defs>
                            <filter id="filter0_d_8673_2670" x="0" y="0" width="75.0005" height="68.0004" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="4" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8673_2670" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8673_2670" result="shape" />
                            </filter>
                            <linearGradient id="paint0_linear_8673_2670" x1="67.0004" y1="30.0002" x2="8" y2="30.0002" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#99A1E3" />
                                <stop offset="0.129808" stop-color="#858EDC" />
                                <stop offset="0.389423" stop-color="#635EBA" />
                                <stop offset="1" stop-color="#43319A" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            )}

            {open && (
                <div className="welcome-box fly-y">
                    <div className="welcome">
                        <h1>Welcome to our website!</h1>
                        <p>
                            Nice to meet you! If you have any question about our services, feel free to contact us.
                        </p>
                    </div>
                    <div className="welcome-2">
                        <div
                            className="faq"
                            onClick={handleOpenFaq}
                            onKeyDown={(e) => e.key === 'Enter' && handleOpenFaq()}
                            aria-details="faq option"
                            role="button"
                            tabIndex="0"
                        >
                            FAQ
                        </div>
                        <div
                            className="talk"
                            onClick={handleOpenChat}
                            onKeyDown={(e) => e.key === 'Enter' && handleOpenChat()}
                            aria-details="chat option"
                            role="button"
                            tabIndex="0"
                        >
                            Let's Talk
                        </div>
                    </div>
                </div>
            )}

            {openFaq && !open && (
                <div className="faq-box">
                    <div className="faq-options">
                        <ul className="faq-options-li">
                            <li>How do I apply?</li>
                            <li>What courses do you offer?</li>
                            <li>When do applications close?</li>
                            <li>Where is the campus located?</li>
                            <li>Talk to someone?</li>
                            <div
                                id="talk-btn"
                                onClick={handleOpenAgent}
                                onKeyDown={(e) => e.key === 'Enter' && handleOpenAgent()}
                                aria-details="chat option"
                                role="button"
                                tabIndex="0"
                            >
                                Can I talk to someone?
                            </div>
                        </ul>
                    </div>
                </div>
            )}

            {openChat && !open && (
                <div className="chat-dialog fly-x">
                    <div className="chat-header">
                        <div>
                            <h1>ChatFlow</h1>
                            <p>A live chat interface that allows for seamless, natural communication and connection.</p>
                        </div>
                        <div
                            className="cross"
                            role="button"
                            tabIndex="0"
                            onClick={() => {
                                setOpenChat(false);
                                setShowBot(true);
                            }}
                            onKeyDown={(e) => e.key === 'Enter' && setOpenChat(false)}
                        >
                            {/* Close Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x-icon lucide-circle-x"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
                        </div>
                    </div>
                    <div className="chat-body">
                        <div className="messages">
                            <p className="bot-msg">Hi! How Can I help You?</p>
                            <div className="chat-options">
                                <ul id="chat-options">
                                    <li>How do I apply?</li>
                                    <li>What courses do you offer?</li>
                                    <li>When do applications close?</li>
                                    <li>Where is the campus located?</li>
                                    <li>Talk to someone?</li>
                                </ul>
                            </div>
                        </div>
                        <div className="input">
                            <input
                                type="text"
                                placeholder="Let's share something"
                                onKeyDown={(e) => e.key === 'Enter' && console.log('recorded')}
                            />
                            <button className="send" tabIndex="0" onClick={() => console.log('recorded')}>
                                {/* Send Icon */}
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.176834 0.118496C0.329527 -0.0108545 0.544637 -0.0367025 0.723627 0.0527924L13.7236 6.55279C13.893 6.63748 14 6.81061 14 7C14 7.18939 13.893 7.36252 13.7236 7.44721L0.723627 13.9472C0.544637 14.0367 0.329527 14.0109 0.176834 13.8815C0.0241407 13.7522 -0.0367196 13.5442 0.0221319 13.353L1.97688 7L0.0221319 0.647048C-0.0367196 0.455781 0.0241407 0.247847 0.176834 0.118496ZM2.8693 7.5L1.32155 12.5302L12.382 7L1.32155 1.46979L2.8693 6.5H8.50001C8.77615 6.5 9.00001 6.72386 9.00001 7C9.00001 7.27614 8.77615 7.5 8.50001 7.5H2.8693Z" fill="white" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {openAgent && !open && (
                <div className="chat-dialog fly-x">
                    <div className="chat-header">
                        <div>
                            <h1>ChatFlow</h1>
                            <p>A live chat interface that allows for seamless, natural communication and connection.</p>
                        </div>
                        <div
                            className="cross"
                            role="button"
                            tabIndex="0"
                            onClick={() => {
                                setOpenAgent(false);
                                setOpenFaq(false);
                                setShowBot(true);
                            }}
                            onKeyDown={(e) => e.key === 'Enter' && setOpenAgent(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x-icon lucide-circle-x"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
                        </div>
                    </div>
                    <div className="chat-body">
                        <div className="messages">
                            <p className="bot-msg">Thanks for joining us! Let's start by getting your name.</p>
                            <ul className="user-msg">
                                {users.map((user, index) => (
                                    <li key={index}>{user.name}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Let's share something" />
                            <button className="send">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.176834 0.118496C0.329527 -0.0108545 0.544637 -0.0367025 0.723627 0.0527924L13.7236 6.55279C13.893 6.63748 14 6.81061 14 7C14 7.18939 13.893 7.36252 13.7236 7.44721L0.723627 13.9472C0.544637 14.0367 0.329527 14.0109 0.176834 13.8815C0.0241407 13.7522 -0.0367196 13.5442 0.0221319 13.353L1.97688 7L0.0221319 0.647048C-0.0367196 0.455781 0.0241407 0.247847 0.176834 0.118496ZM2.8693 7.5L1.32155 12.5302L12.382 7L1.32155 1.46979L2.8693 6.5H8.50001C8.77615 6.5 9.00001 6.72386 9.00001 7C9.00001 7.27614 8.77615 7.5 8.50001 7.5H2.8693Z" fill="white" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
