import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import Link  from "next/link";

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
        submenu: [
            {
                id: 11,
                title: 'Home style 1',
                link: '/home'
            },
            {
                id: 12,
                title: 'Home style 2',
                link: '/home2'
            },
        ]
    },

    {
        id: 2,
        title: 'About',
        link: '/about',
    },

{
    id: 3,
        title: 'Causes',
        link: '/case',
        submenu: [
            {
                id: 31,
                title: 'Causes',
                link: '/case'
            },
            {
                id: 32,
                title: 'Causes Single',
                link: '/cause-single'
            }
        ]
    },
{
    id: 4,
        title: 'Event',
        link: '/event',
        submenu: [
            {
                id: 41,
                title: 'Event',
                link: '/event'
            },
            {
                id: 42,
                title: 'Event Single',
                link: '/event-details'
            }
        ]
    },
    {
        id: 7,
        title: 'Pages',
        link: '/',
        submenu: [
            {
                id: 71,
                title: 'About',
                link: '/about'
            },
            {
                id: 75,
                title: 'Donate',
                link: '/donate'
            },
            {
                id: 76,
                title: 'Volunteer',
                link: '/volunteer'
            },
    
            {
                id: 79,
                title: 'Error 404',
                link: '/404'
            },
            
        ]
    },

    {
        id: 5,
        title: 'Blog',
        link: '/blog',
        submenu: [
            {
                id: 51,
                title: 'Blog',
                link: '/blog'
            },
            {
                id: 52,
                title: 'Blog Left sidebar',
                link: '/blog-left'
            },
            {
                id: 53,
                title: 'Blog full width',
                link: '/blog-fullwidth'
            },
            {
                id: 54,
                title: 'Blog single',
                link: '/blog-details'
            },
            {
                id: 55,
                title: 'Blog single Left sidebar',
                link: '/blog-details-left/Best-and-less-published-their-supplier-lists.'
            },
            {
                id: 56,
                title: 'Blog single Left sidebar',
                link: '/blog-details-fullwidth/Best-and-less-published-their-supplier-lists.'
            },
        ]
    },
    {
        id: 88,
        title: 'Contact',
        link: '/contact',
    }
    
    
]

const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null}  key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                          <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <Link onClick={ClickHandler}
                                                                    href={submenu.link}>{submenu.title}</Link>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <Link
                                        href={item.link}>{item.title}</Link>
                                }
                            </ListItem>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;