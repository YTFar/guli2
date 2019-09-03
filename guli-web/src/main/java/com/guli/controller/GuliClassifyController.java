package com.guli.controller;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.guli.pojo.GuliClassify;
import com.guli.service.GuliClassifyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
public class GuliClassifyController {

    @Autowired
    GuliClassifyService guliClassifyService;

    @RequestMapping(value = "/guliClassify/getUser")
    public String hello() {
        IPage<GuliClassify> guliClassifyIPage = guliClassifyService.fenYe(new Page(1, 2));
        return "";
    }
}
