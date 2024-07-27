
"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip, faCalendar, faGamepad, faUser, faFile, faLink } from '@fortawesome/free-solid-svg-icons'
import { GoogleOAuthProvider } from '@react-oauth/google';      
import { useRouter } from 'next/navigation'
// import Dropzone, { useDropzone } from "react-dropzone";
// import { Icon, List, ListItem } from "@wfp/ui";
// import { iconUpload } from "@wfp/icons";
import "react-datepicker/dist/react-datepicker.css";
// import { jwtDecode } from "jwt-decode";
// import Link from 'next/link'
import { useEffect, useState } from 'react';
import { useAuth } from '../layout';
import { useFormik } from 'formik';
import { faFacebookF, faXTwitter, faInstagram, faTelegram, faDiscourse } from '@fortawesome/free-brands-svg-icons';
import { signUpSchema } from '@/schemas';
// import TextEditor from '@/components/TextEditor';


let initialValues = {
    gameName: '',
    publisherName: '',
    tokenAddress: '',
    tokenRequired: '',
    gameUrl: '',
    shortDesc: '',
    longDesc: '',
    facebookUrl: '',
    xUrl: '',
    instagramUrl: '',
    docsUrl: '',
    telegramUrl: '',
    otherLink: '',
    discourseUrl: '',
    coins: {
        Solana: false,
        Ethereum: false,
        Bitcoin: false,
        Dogecoin: false,
        Arbitrum: false,
        TRON: false,
    },
    releaseDate: null,
    token: null,
    playerType: null,
    categories: [],
    files: null,
    gameLogo: null,
    gameHeader: null,
    screenshot: [],
};


const page = () => {


    //    ===========================================================
    const { userData, setUserData } = useAuth();
    const router = useRouter();
    const [FeeType, setFeeType] = useState('free');


    // useEffect(() => {
    //     console.log('page is refreshed');
    //     if (localStorage.getItem('GoogleGameToken')) {
    //         let x = jwtDecode(localStorage.getItem('GoogleGameToken'));

    //         setUserData(x);
    //     } else {
    //         router.push('/dashbord');
    //     }
    // }, []);

    //-----------check wither it is paid or free-----------
    const handleFeeTypeChange = (e) => {

        if (e.target.value == 'free') {

            console.log("free");
            setFeeType('free');
        } else {

            console.log("paid");
            setFeeType('paid');
        }
    };


    let { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue, setFieldTouched, } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            console.log(
                "file: Register ", values
            )
        }
    })
    console.log("errors=>", errors)
    console.log("value=>", values)
    console.log("touched=>", touched)

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFieldValue(`coins.${name}`, checked);
    };

    const handlecat = (e) => {
        const { name } = e.target;
        if (values.categories.includes(name)) {
            // If the category is already in the array, remove it
            setFieldValue('categories', values.categories.filter((category) => category !== name));
        } else {
            // If the category is not in the array, add it
            setFieldValue('categories', [...values.categories, name]);
        }
    };

    // ------------text editor---------------------
    const onChangeTextEditor = (newEditorState) => {
        console.log("============>", newEditorState);
        initialValues.longDesc = newEditorState;
        setFieldValue('longDesc', newEditorState.toString('html'));
    };

    return (
        <GoogleOAuthProvider clientId="809873110728-poaqifiglebqjhkrh5d1ar26nf50o7l5.apps.googleusercontent.com">
            <div className='bg-slate-900'>
                <div className='launch_game_box'>
                    <div className="title-area launch_topic  ">
                        <h2 className="sec-title text-white pt-10">Launch your game <span className="text-theme">!</span>
                        </h2>
                        <span className="sub-title p-0  m-0"># About Game</span>
                    </div>

                    <div className='form_inp'>
                        <form action='#' method='POST' onSubmit={handleSubmit}>
                            <h1 className='launch_game_top'>Game Name</h1>
                            <div className={`game_name_box ${errors.gameName && touched.gameName ? 'invalid-input' : ''}`}>
                                <input type='text' placeholder='GAME NAME' className='launch_in'
                                    name='gameName'
                                    value={values.gameName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <FontAwesomeIcon icon={faGamepad} style={{ color: "#737373", }} />
                            </div>
                            {errors.gameName && touched.gameName ? (
                                <p className='text-red-700  text-sm'>{errors.gameName}</p>
                            ) : null}


                            <h1 className='launch_game_top' >Select Chain</h1>
                            <div className='select_box'>
                                <div className='select_item'>
                                    <label class="material-checkbox m-0">
                                        <img src='/solana-sol-logo.png' style={{ height: '20px', marginRight: '10px' }} />
                                        <span className='check_box_text_name'>Solana</span>
                                        <input type="checkbox" name='Solana'
                                            checked={values.coins.Solana}
                                            onChange={handleCheckboxChange} />
                                        <span class="checkmark"></span>

                                    </label>
                                </div>

                                <div className='select_item'>
                                    <label class="material-checkbox m-0">
                                        <img src='/ethereum-eth-logo.png' style={{ height: '20px', marginRight: '10px' }} />
                                        <span className='check_box_text_name'>Ethereum</span>
                                        <input type="checkbox" name='ethereum'
                                            checked={values.coins.ethereum}
                                            onChange={handleCheckboxChange} />
                                        <span class="checkmark"></span>

                                    </label>
                                </div>

                                <div className='select_item'>
                                    <label class="material-checkbox m-0">
                                        <img src='/bitcoin-btc-logo.png' style={{ height: '20px', marginRight: '10px' }} />
                                        <span className='check_box_text_name'>Bitcoin</span>
                                        <input type="checkbox" name='bitcoin'
                                            checked={values.coins.bitcoin}
                                            onChange={handleCheckboxChange} />
                                        <span class="checkmark"></span>

                                    </label>
                                </div>

                                <div className='select_item'>
                                    <label class="material-checkbox m-0">
                                        <img src='/dogecoin-doge-logo.png' style={{ height: '20px', marginRight: '10px' }} />
                                        <span className='check_box_text_name'>Dogecoin</span>
                                        <input type="checkbox" name='dogecoin'
                                            checked={values.coins.dogecoin}
                                            onChange={handleCheckboxChange} />
                                        <span class="checkmark"></span>

                                    </label>
                                </div>

                                <div className='select_item'>
                                    <label class="material-checkbox m-0">
                                        <img src='/arbitrum-arb-logo.png' style={{ height: '20px', marginRight: '10px' }} />
                                        <span className='check_box_text_name'>Arbitrum</span>
                                        <input type="checkbox" name='arbitrum'
                                            checked={values.coins.arbitrum}
                                            onChange={handleCheckboxChange} />
                                        <span class="checkmark"></span>

                                    </label>
                                </div>

                                <div className='select_item'>
                                    <label class="material-checkbox m-0">
                                        <img src='/tron-trx-logo.png' style={{ height: '20px', marginRight: '10px' }} />
                                        <span className='check_box_text_name'>Tron</span>
                                        <input type="checkbox" name='TRON'
                                            checked={values.coins.TRON}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span class="checkmark"></span>

                                    </label>
                                </div>


                            </div>
                            {errors.coins && touched.coins && Object.values(values.coins).every(coin => !coin) ? (
                                <p className='text-red-700  text-sm'>Please select at least one coin</p>
                            ) : null}

                            <h1 className='launch_game_top' >Publisher Name</h1>
                            <div className={`game_name_box ${errors.publisherName && touched.publisherName ? 'invalid-input' : ''}`}>
                                <input type='text' placeholder='PUBLISHER NAME' className='launch_in'
                                    name='publisherName'
                                    value={values.publisherName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <FontAwesomeIcon icon={faUser} style={{ color: "#8a8a8a", }} />
                            </div>
                            {errors.publisherName && touched.publisherName ? (
                                <p className='text-red-700  text-sm'>{errors.publisherName}</p>
                            ) : null}

                            <h1 className='launch_game_top' >Release On</h1>
                            <div className={`game_name_box ${errors.releaseDate && touched.releaseDate ? 'invalid-input' : ''}`}>
                                <input type="date"
                                    id="releaseDate"
                                    name="releaseDate"
                                    value={values.releaseDate}
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                            </div>
                            {errors.releaseDate && touched.releaseDate ? (
                                <p className='text-red-700  text-sm'>{errors.releaseDate}</p>
                            ) : null}

                            <h1 className='launch_game_top' >Game Link</h1>
                            <div className={`game_name_box ${errors.gameUrl && touched.gameUrl ? 'invalid-input' : ''}`}>
                                <input type='text' placeholder='URL LINK'
                                    className='launch_in'
                                    name='gameUrl'
                                    value={values.gameUrl} onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <FontAwesomeIcon icon={faPaperclip} style={{ color: "#878787", }} />
                            </div>
                            {errors.gameUrl && touched.gameUrl ? (
                                <p className='text-red-700  text-sm'>{errors.gameUrl}</p>
                            ) : null}

                            <h1 className='launch_game_top' >Token</h1>
                            <div className='select_box'>
                                <div className='select_item'>
                                    <label class="material-checkbox m-0">
                                        <input type="radio" name='token'
                                            value='free' onClick={handleFeeTypeChange}
                                            checked={values.token === 'free'}
                                            onChange={handleChange}
                                        />
                                        <span className='check_box_text_name'> FREE </span>
                                        <img src='/free.png' style={{ height: '25px' }} />
                                    </label>
                                </div>

                                <div className='select_item'>
                                    <label class="material-checkbox m-0">
                                        <input type="radio" name='token'
                                            value='paid' onClick={handleFeeTypeChange}
                                            checked={values.token === 'paid'}
                                            onChange={handleChange}
                                        />
                                        <span className='check_box_text_name'> PAID </span>
                                        <img src='/coin.png' style={{ height: '25px' }} />
                                    </label>
                                </div>
                            </div>
                            {errors.token && touched.token ? (
                                <p className='text-red-700  text-sm'>{errors.token}</p>
                            ) : null}

                            {
                                FeeType !== 'free' ? (
                                    <>
                                        <h1 className='launch_game_top'>Fee Info</h1>
                                        <div className='flex justify-between gap-2'>
                                            <div className='game_name_box'>
                                                <input type='text' placeholder='TOKEN ADDRESS' className='launch_in mr-2'
                                                    name='tokenAddress'
                                                    value={values.tokenAddress}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                <img src='/address.png' style={{ height: '25px' }} />
                                            </div>

                                            <div className='game_name_box '>
                                                <input type='text' placeholder='TOKENS REQUIRE TO PLAY' className='launch_in mr-2'
                                                    name='tokenRequired'
                                                    value={values.tokenRequired}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                <img src='/tokens.png' style={{ height: '25px' }} />
                                            </div>
                                        </div>
                                    </>
                                ) : <></>
                            }

                            <h1 className='launch_game_top' >Player Type</h1>
                            <div className='select_box'>
                                <div className='select_item'>
                                    <label class="material-checkbox m-0">
                                        <input type="radio" name='playerType'
                                            value='single'
                                            checked={values.playerType === 'single'}
                                            onChange={handleChange}
                                        />

                                        <span className='check_box_text_name'> SINGLE </span>
                                        <img src='/single-player.png' style={{ height: '25px' }} />
                                    </label>
                                </div>

                                <div className='select_item'>
                                    <label class="material-checkbox m-0">
                                        <input type="radio" name='playerType'
                                            value='multiplayer'
                                            checked={values.playerType === 'multiplayer'}
                                            onChange={handleChange} />

                                        <span className='check_box_text_name'> MULTIPLAYER </span>
                                        <img src='/battle.png' style={{ height: '25px' }} />
                                    </label>
                                </div>
                            </div>
                            {errors.playerType && touched.playerType ? (
                                <p className='text-red-700  text-sm'>{errors.playerType}</p>
                            ) : null}


                            <h1 className='launch_game_top' >Categeries</h1>
                            <div className='select_box'>
                                <div className='select_item'>
                                    <label class="material-checkbox m-0">
                                        <img src='/action.png' style={{ height: '25px', marginRight: '15px' }} />
                                        <span className='check_box_text_name'>Action </span>
                                        <input type="checkbox" name='Action'
                                            checked={values.categories.includes('Action')}
                                            onChange={handlecat}
                                        />
                                        <span class="checkmark"></span>

                                    </label>
                                </div>

                                <div className='select_item'>
                                    <label class="material-checkbox m-0">
                                        <img src='/game-strategy.png' style={{ height: '22px', marginRight: '15px' }} />
                                        <span className='check_box_text_name'>Tactical</span>
                                        <input type="checkbox" name='Tactical'
                                            checked={values.categories.includes('Tactical')}
                                            onChange={handlecat} />
                                        <span class="checkmark"></span>

                                    </label>
                                </div>

                                <div className='select_item'>
                                    <label class="material-checkbox m-0">
                                        <img src='/boxing.png' style={{ height: '25px', marginRight: '15px' }} />
                                        <span className='check_box_text_name'>Fighting</span>
                                        <input type="checkbox" name='Fighting'
                                            checked={values.categories.includes('Fighting')}
                                            onChange={handlecat} />
                                        <span class="checkmark"></span>

                                    </label>
                                </div>

                                <div className='select_item'>
                                    <label class="material-checkbox m-0">
                                        <img src='/jigsaw.png' style={{ height: '25px', marginRight: '15px' }} />
                                        <span className='check_box_text_name'>Puzzle</span>
                                        <input type="checkbox" name='Puzzle'
                                            checked={values.categories.includes('Puzzle')}
                                            onChange={handlecat} />
                                        <span class="checkmark"></span>

                                    </label>
                                </div>

                                <div className='select_item'>
                                    <label class="material-checkbox m-0">
                                        <img src='/adventurer.png' style={{ height: '25px', marginRight: '15px' }} />
                                        <span className='check_box_text_name'>Adventure</span>
                                        <input type="checkbox" name='Adventure'
                                            checked={values.categories.includes('Adventure')}
                                            onChange={handlecat} />
                                        <span class="checkmark"></span>

                                    </label>
                                </div>

                                <div className='select_item'>
                                    <label class="material-checkbox m-0">
                                        <img src='/survival.png' style={{ height: '25px', marginRight: '15px' }} />
                                        <span className='check_box_text_name'>Survival</span>
                                        <input type="checkbox" name='Survival '
                                            checked={values.categories.includes('Survival')}
                                            onChange={handlecat} />
                                        <span class="checkmark"></span>

                                    </label>
                                </div>

                            </div>
                            {errors.categories && touched.categories ? (
                                <p className='text-red-700  text-sm'>{errors.categories}</p>
                            ) : null}


                            <h1 className='launch_game_top' >About</h1>
                            <p className='mt-4 ml-0 mr-0'>Write a Short Description about your game</p>
                            <p className='text-sm'>The length of text minum 100 word:</p>
                            <textarea placeholder='Short Description' rows="2" name='shortDesc'
                                className={`about_box ${errors.shortDesc && touched.shortDesc ? 'invalid-input' : ''}`}
                                value={values.shortDesc}
                                onChange={handleChange}
                                onBlur={handleBlur}>

                            </textarea>
                            {errors.shortDesc && touched.shortDesc ? (
                                <p className='text-red-700  text-sm'>{errors.shortDesc}</p>
                            ) : null}




                            {/* ==========================react text editor=========================== */}
                            <p className='mt-4 ml-0 mr-0'>Write a Full Description about your game</p>
                            <p className='text-sm'>The length of text minum 400 word:</p>
                            {/* <div className={`textEditor_box ${errors.longDesc && touched.longDesc ? 'invalid-input' : ''}`}>
                                <TextEditor markup="" onChange={onChangeTextEditor} />
                            </div> */}
                            {errors.longDesc && touched.longDesc ? (
                                <p className='text-red-700  text-sm mt-1'>{errors.longDesc}</p>
                            ) : null}
                            {/* ========================react text editor end======================== */}


                            <h1 className='launch_game_top'>Link</h1>
                            <div className='link_box1'>
                                <div className='link_box'>
                                    <div className={`game_name_box mt-3 ${errors.facebookUrl && touched.facebookUrl ? 'invalid-input' : ''}`}>
                                        <input type='text' placeholder='WEBSITE URL' className='launch_in mr-2'
                                            name='facebookUrl'
                                            value={values.facebookUrl}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                        <FontAwesomeIcon icon={faFacebookF} style={{ color: "#7d7d7d", }} />
                                    </div>
                                    {errors.facebookUrl && touched.facebookUrl ? (
                                        <p className='text-red-700  text-sm'>{errors.facebookUrl}</p>
                                    ) : null}
                                </div>
                                <div className='link_box'>
                                    <div className={`game_name_box mt-3 ${errors.xUrl && touched.xUrl ? 'invalid-input' : ''}`}>
                                        <input type='text' placeholder='X URL' className='launch_in mr-2'
                                            name='xUrl'
                                            value={values.xUrl}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                        <FontAwesomeIcon icon={faXTwitter} style={{ color: "#858585", }} />
                                    </div>
                                    {errors.xUrl && touched.xUrl ? (
                                        <p className='text-red-700  text-sm'>{errors.xUrl}</p>
                                    ) : null}
                                </div>
                            </div>


                            <div className='link_box1'>
                                <div className='link_box'>
                                    <div className={`game_name_box mt-3 ${errors.instagramUrl && touched.instagramUrl ? 'invalid-input' : ''}`}>
                                        <input type='text' placeholder='INSTAGRAM URL' className='launch_in mr-2'
                                            name='instagramUrl'
                                            value={values.instagramUrl}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                        <FontAwesomeIcon icon={faInstagram} style={{ color: "#919191", }} />
                                    </div>
                                    {errors.instagramUrl && touched.instagramUrl ? (
                                        <p className='text-red-700  text-sm'>{errors.instagramUrl}</p>
                                    ) : null}
                                </div>
                                <div className='link_box'>
                                    <div className={`game_name_box mt-3 ${errors.docsUrl && touched.docsUrl ? 'invalid-input' : ''}`}>
                                        <input type='text' placeholder='DOCS URL' className='launch_in mr-2'
                                            name='docsUrl'
                                            value={values.docsUrl}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                        <FontAwesomeIcon icon={faFile} style={{ color: "#7d7d7d", }} />
                                    </div>
                                    {errors.docsUrl && touched.docsUrl ? (
                                        <p className='text-red-700  text-sm'>{errors.docsUrl}</p>
                                    ) : null}
                                </div>
                            </div>

                            <div className='link_box1'>
                                <div className='link_box'>
                                    <div className={`game_name_box mt-3 ${errors.telegramUrl && touched.telegramUrl ? 'invalid-input' : ''}`}>
                                        <input type='text' placeholder='TELEGRAM' className='launch_in mr-2'
                                            name='telegramUrl'
                                            value={values.telegramUrl}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                        <FontAwesomeIcon icon={faTelegram} style={{ color: "#8f8f8f", }} />
                                    </div>
                                    {errors.telegramUrl && touched.telegramUrl ? (
                                        <p className='text-red-700  text-sm'>{errors.telegramUrl}</p>
                                    ) : null}
                                </div>

                                <div className='link_box'>
                                    <div className={`game_name_box mt-3 ${errors.discourseUrl && touched.discourseUrl ? 'invalid-input' : ''}`}>
                                        <input type='text' placeholder='DISCOURSE' className='launch_in mr-2'
                                            name='discourseUrl'
                                            value={values.discourseUrl}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                        <FontAwesomeIcon icon={faDiscourse} style={{ color: "#8f8f8f", }} />
                                    </div>
                                    {errors.discourseUrl && touched.discourseUrl ? (
                                        <p className='text-red-700  text-sm'>{errors.discourseUrl}</p>
                                    ) : null}
                                </div>
                            </div>


                            <p className=' mt-3 '>Other link</p>
                            <div className='link_box'>
                                <div className={`game_name_box mt-3 ${errors.otherLink && touched.otherLink ? 'invalid-input' : ''}`}>
                                    <input type='text' placeholder='OTHER URL' className='launch_in mr-2'
                                        name='otherLink'
                                        value={values.otherLink}
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                    <FontAwesomeIcon icon={faLink} style={{ color: "#878787", }} />
                                </div>
                                {errors.otherLink && touched.otherLink ? (
                                    <p className='text-red-700  text-sm'>{errors.otherLink}</p>
                                ) : null}
                            </div>


                            {/* ===============================image of game========================= */}
                            <h1 className='launch_game_top'>Add Game Images</h1>
                            <p className='text-sm'>Game image, displayed on screener and search. Requirements:</p>
                            <p className='text-sm'>Image size (Square, for example 250 x 260 px ):</p>
                            <p className='text-sm pb-2'>Use a high resolution image, we take care of compressing it as needed:</p>
                            <div className={`dropzone ${errors.files ? 'error_dropzone' : ''}`} >
                                <label for="gameImage" className='m-0 w-full'>
                                    {values.files && !errors.files ? (
                                        <img src='/picture.png' className='upload_icon' />
                                    ) : <img src='/photo.png ' className='upload_icon' />}
                                    <div className='text-slate-300'>Upload  Game Image </div>
                                </label>
                                <input
                                    className='gameImageFile'
                                    id='gameImage'
                                    type="file"
                                    name='files'
                                    onChange={(e) => {
                                        console.log("change", e.target)
                                        const file = e.target.files[0];
                                        setFieldValue('files', file);
                                        console.log(touched.hasOwnProperty('gameLogo'), "===")
                                    }}
                                />
                                {values.files && !errors.files ? (
                                    <img src={URL.createObjectURL(values.files)} alt="Uploaded" className='gameImagefile' />
                                ) : null}
                            </div>
                            {errors.files ? (
                                <p className='text-red-700  text-sm'>{errors.files}</p>
                            ) : null}


                            {/* ===================game logo=================== */}
                            <h1 className='launch_game_top'>Add Game Logo</h1>
                            <p className='text-sm'>Game logo, displayed on screener and search. Requirements:</p>
                            <p className='text-sm'>Logo image size (Square, for example 29 x 30 px or 20 x 29 px):</p>
                            <p className='text-sm pb-2'>Use a high resolution image, we take care of compressing it as needed:</p>
                            <div className={`dropzone ${errors.gameLogo && touched.gameLogo ? 'error_dropzone' : ''}`} >
                                <label htmlFor='gameLogo' className='m-0 w-full'>
                                    {values.gameLogo && !errors.gameLogo ? (
                                        <img src='/picture.png' className='upload_icon' />
                                    ) : <img src='/photo.png ' className='upload_icon' />}
                                    <div className='text-slate-300'>Upload Game Logo </div>
                                </label>
                                <input
                                    className='gameImageFile'
                                    id='gameLogo'
                                    type="file"
                                    name='gameLogo'
                                    onChange={(e) => {
                                        const gameLogo = e.target.files[0];
                                        setFieldValue('gameLogo', gameLogo);
                                        setFieldTouched('gameLogo', true)
                                    }}
                                />
                                {values.gameLogo && !errors.gameLogo ? (
                                    <img src={URL.createObjectURL(values.gameLogo)} alt="Uploaded" className='gameImagefile' />
                                ) : null}
                            </div>
                            {errors.gameLogo && touched.hasOwnProperty('gameLogo') ? (
                                <p className='text-red-700  text-sm'>{errors.gameLogo}</p>
                            ) : null}

                            {/* =========================game header image================================ */}
                            <h1 className='launch_game_top'>Add Game Header</h1>
                            <p className='text-sm'>Game header image, displayed on screener and search. Requirements:</p>
                            <p className='text-sm'>Header image size (Square, for example 1100 x 700 px ):</p>
                            <p className='text-sm pb-2'>Use a high resolution image, we take care of compressing it as needed:</p>
                            <div className={`dropzone ${errors.gameHeader ? 'error_dropzone' : ''}`} >
                                <label htmlFor='gameHeader' className='m-0 w-full'>
                                    {values.gameHeader && !errors.gameHeader ? (
                                        <img src='/picture.png' className='upload_icon' />
                                    ) : <img src='/photo.png ' className='upload_icon' />}
                                    <div className='text-slate-300'>Upload Game Header Image </div>
                                </label>
                                <input
                                    className='gameImageFile'
                                    id='gameHeader'
                                    type="file"
                                    name='gameHeader'
                                    onChange={(e) => {
                                        const gameHeader = e.target.files[0];
                                        setFieldValue('gameHeader', gameHeader);
                                    }}
                                />
                                {values.gameHeader && !errors.gameHeader ? (
                                    <img src={URL.createObjectURL(values.gameHeader)} alt="Uploaded" className='gameImagefile' />
                                ) : null}
                            </div>
                            {errors.gameHeader ? (
                                <p className='text-red-700  text-sm'>{errors.gameHeader}</p>
                            ) : null}


                            {/* ======================screeshotes====================== */}
                            <h1 className='launch_game_top'>Add Game Screenshots</h1>
                            <p className='text-sm'>Game screenshots, displayed on screener and search. Requirements:</p>
                            <p className='text-sm'>Screenshots size (Square, for example 1200 x 500 px ):</p>
                            <p className='text-sm'>Select at list four Screenshots:</p>
                            <p className='text-sm pb-2'>Use a high resolution image, we take care of compressing it as needed:</p>
                            <div className={`dropzone ${errors.screenshot ? 'error_dropzone' : ''}`} >
                                <label htmlFor='screenshot' className='m-0 w-full'>
                                    {values.screenshot.length > 0 && !errors.screenshot ? (
                                        <img src='/picture.png' className='upload_icon' />
                                    ) : <img src='/gallery.png ' className='upload_icon' />}
                                    <div className='text-slate-300'>Upload Game Screenshots</div>
                                </label>
                                <input
                                    multiple
                                    className='gameImageFile'
                                    id='screenshot'
                                    type="file"
                                    name='screenshot'
                                    onChange={(e) => {
                                        const screenshots = Array.from(e.target.files).map((file) => ({ file }));
                                        setFieldValue('screenshot', screenshots);

                                    }}
                                />
                                {/* Display uploaded images */}
                                {values.screenshot.length > 0 && !errors.screenshot ? (
                                    <div>
                                        {values.screenshot.map((screenshot, index) => (
                                            <img
                                                key={index}
                                                src={URL.createObjectURL(screenshot.file)}
                                                alt={`Uploaded ${index + 1}`}
                                                className='gameImagefile'
                                            />
                                        ))}
                                    </div>
                                ) : null}
                            </div>
                            {errors.screenshot ? (
                                <p className='text-red-700  text-sm'>{errors.screenshot[0].file ? errors.screenshot[0].file : errors.screenshot}</p>
                            ) : null}



                            <div class="form-btn col-12 mt-4">
                                <button class={`th-btn ${Object.keys(errors).length !== 0 ? 'shake' : ''}`} type='submit'>
                                    Send Message <i class="fa-solid fa-arrow-right ms-2"></i>
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </GoogleOAuthProvider>
    )
}

export default page
