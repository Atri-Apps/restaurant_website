from .atri import Atri
from fastapi import Request, Response
from atri_utils import *
import json


def set_prod_data(at:Atri, data):
    at.Product_Image.custom.src = '/app-assets/' + data['image']
    at.Product_Name.custom.text = data['name']
    at.Product_Price.custom.text = "$ " + data['price'] + " USD"
    at.Product_Price.custom.text = data['description']


def init_state(at: Atri):
    """
    This function is called everytime "Publish" button is hit in the editor.
    The argument "at" is a dictionary that has initial values set from visual editor.
    Changing values in this dictionary will modify the intial state of the app.
    """
    pass

def handle_page_request(at: Atri, req: Request, res: Response, query: str):
    """
    This function is called whenever a user loads this route in the browser.
    """
    f = open("products.json")
    data = json.load(f)
    prod_name = " ".join(query.split('_')).split('=')[1]
    print(prod_name)
    for i in data:
        if i['name'].lower() == prod_name:
            set_prod_data(at, i)
    pass
    pass

def handle_event(at: Atri, req: Request, res: Response):
    """
    This function is called whenever an event is received. An event occurs when user
    performs some action such as click button.
    """
    pass