//
//  ViewController.swift
//  MeetingMonitor
//
//  Created by Anurita Srivastava on 22/07/17.
//  Copyright © 2017 Anurita Srivastava. All rights reserved.
//

import UIKit

class ViewController: UIViewController,UITextFieldDelegate {
    
    var mm : UILabel = {
        var view = UILabel()
        view.translatesAutoresizingMaskIntoConstraints = false
        view.text = "MEETING MONITOR"
        view.font = UIFont(name: "Avenir-Heavy", size: 26)
        view.textColor = UIColor(rgb: 0xFFA302)
        view.textAlignment = .center
        
        return view
    }()

    
    var signLabel : UILabel = {
        var view = UILabel()
        view.translatesAutoresizingMaskIntoConstraints = false
        view.text = "SIGN IN"
        view.font = UIFont(name: "Avenir-Heavy", size: 18)
        view.textColor = UIColor(rgb: 0x476ae8)
        view.textAlignment = .center
        
        return view
    }()
    
    var id : UITextField = {
        var view = UITextField()
        view.translatesAutoresizingMaskIntoConstraints = false
        view.placeholder = "Enter your email address"
        view.font = UIFont(name: "CircularStd-Book", size: 14)
        view.textColor = UIColor.black
        view.textAlignment = .left
       // view.delegate = self
        
        return view
    }()
    
    var pw : UITextField = {
        var view = UITextField()
        view.translatesAutoresizingMaskIntoConstraints = false
        view.placeholder = "Enter your password"
        view.font = UIFont(name: "CircularStd-Book", size: 14)
        view.textColor = UIColor.black
        view.textAlignment = .left
        //view.delegate = self
        
        return view
    }()
    var id_separator : UIView = {
        
        var view = UIView()
        view.translatesAutoresizingMaskIntoConstraints = false
        view.backgroundColor = UIColor.gray
        
        return view
    }()
    var pw_separator : UIView = {
        
        var view = UIView()
        view.translatesAutoresizingMaskIntoConstraints = false
        view.backgroundColor = UIColor.gray
        
        return view
    }()
    var submit : UIButton = {
        var view = UIButton()
        view.translatesAutoresizingMaskIntoConstraints = false
        view.setTitle("SUBMIT", for: UIControlState.normal)
        view.titleLabel!.font = UIFont(name: "Avenir-Heavy" , size: 14)
        view.backgroundColor = UIColor(rgb: 0x4DA64E)
        view.layer.masksToBounds = false
        
        return view
    }()
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        self.view.backgroundColor = UIColor.white
        id.delegate = self
        pw.delegate = self
        setupView()
        
    }
    
    func setupView(){
        
        view.addSubview(mm)
        mm.centerXAnchor.constraint(equalTo: view.centerXAnchor).isActive = true
        mm.centerYAnchor.constraint(equalTo: view.centerYAnchor, constant: -120).isActive = true
        mm.heightAnchor.constraint(equalToConstant: 30).isActive = true
        mm.sizeToFit()

        view.addSubview(signLabel)
        signLabel.centerXAnchor.constraint(equalTo: view.centerXAnchor).isActive = true
        signLabel.centerYAnchor.constraint(equalTo: view.centerYAnchor, constant: -60).isActive = true
        signLabel.heightAnchor.constraint(equalToConstant: 30).isActive = true
        signLabel.sizeToFit()
        
        view.addSubview(id)
        id.centerXAnchor.constraint(equalTo: view.centerXAnchor).isActive = true
        id.widthAnchor.constraint(equalToConstant: 200).isActive = true
        id.centerYAnchor.constraint(equalTo: view.centerYAnchor).isActive = true
        id.sizeToFit()
        
        view.addSubview(id_separator)
        id_separator.centerXAnchor.constraint(equalTo: view.centerXAnchor).isActive = true
        id_separator.widthAnchor.constraint(equalToConstant: 200).isActive = true
        id_separator.topAnchor.constraint(equalTo: id.bottomAnchor).isActive = true
        id_separator.heightAnchor.constraint(equalToConstant: 1).isActive = true

        view.addSubview(pw)
        pw.centerXAnchor.constraint(equalTo: view.centerXAnchor).isActive = true
        pw.widthAnchor.constraint(equalToConstant: 200).isActive = true
        pw.centerYAnchor.constraint(equalTo: view.centerYAnchor,constant: 40).isActive = true
        pw.sizeToFit()

        view.addSubview(pw_separator)
        pw_separator.centerXAnchor.constraint(equalTo: view.centerXAnchor).isActive = true
        pw_separator.widthAnchor.constraint(equalToConstant: 200).isActive = true
        pw_separator.topAnchor.constraint(equalTo: pw.bottomAnchor).isActive = true
        pw_separator.heightAnchor.constraint(equalToConstant: 1).isActive = true
        
        
        view.addSubview(submit)
        submit.centerXAnchor.constraint(equalTo: view.centerXAnchor).isActive = true
        submit.topAnchor.constraint(equalTo: pw_separator.bottomAnchor,constant: 20).isActive = true
        submit.widthAnchor.constraint(equalToConstant: 80).isActive = true
        submit.heightAnchor.constraint(equalToConstant: 30).isActive = true
        submit.layer.shadowColor = UIColor.black.cgColor
        submit.layer.shadowRadius = 0.5
        submit.layer.shadowOpacity = 0.2
        submit.layer.shadowOffset = CGSize(width: 2, height: 2)
}
    
    func textFieldShouldBeginEditing(_ textField: UITextField) -> Bool {
        if(textField == id){
    id_separator.backgroundColor = UIColor.red
            return true
    }
        if(textField == pw){
            pw_separator.backgroundColor = UIColor.red
            return true
        }
        return false
    }
    
    func textFieldShouldEndEditing(_ textField: UITextField) -> Bool {
        if(textField == id){
            id_separator.backgroundColor = UIColor.gray
            return true
        }
        if(textField == pw){
            pw_separator.backgroundColor = UIColor.gray
            return true
        }
        return false
    }


}


    
