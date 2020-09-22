package com.alvis.exam.controllerTest.admin;

import com.alvis.exam.ExamApplicationTests;
import com.alvis.exam.domain.ExamPaper;
import com.alvis.exam.domain.User;
import com.alvis.exam.repository.UserMapper;
import com.alvis.exam.service.ExamPaperService;
import com.alvis.exam.service.UserService;
import com.alvis.exam.viewmodel.admin.exam.ExamPaperEditDTO;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = ExamApplicationTests.class)
public class ExamPaperControllerTest {

    @Autowired
    private ExamPaperService examPaperService;

    @Autowired
    private UserService userService;

    @Test
    public void testSavePaper(){

        User user = userService.getUserById(2);
        ExamPaperEditDTO query = new ExamPaperEditDTO();
        query.setLevel(1);
        query.setName("试卷的基本信息");
        query.setPaperType(1);
        query.setQuestionCount(10);
        query.setSuggestTime(60);
        query.setSubjectId(1);

        ExamPaper examPaper = examPaperService.savePaper(query,user);
        System.out.println(examPaper);
    }

}
