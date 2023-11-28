package com.Canitas02.FralarmSecurity;

import com.Canitas02.FralarmSecurity.controller.ClientController;
import com.Canitas02.FralarmSecurity.model.Client;
import com.Canitas02.FralarmSecurity.model.Company;
import com.Canitas02.FralarmSecurity.service.ClientService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Optional;

import static org.mockito.Mockito.*;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@ExtendWith(SpringExtension.class)
@WebMvcTest(    ClientController.class)
public class ClientControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ClientService clientService;

    @Autowired
    private ObjectMapper objectMapper;

    private Client client;

    @BeforeEach
    public void setUp() {
        // Initialize your Company object first
        Company company = new Company("Company Name", "company@example.com", "456 Company Address");

        // Then initialize your Client object with the associated Company
        client = new Client("Test Name", "test@example.com", "123 Test Address", "1234567890", company);
    }


    @Test
    public void testCreateClient() throws Exception {
        given(clientService.createClient(any(Client.class))).willReturn(client);

        mockMvc.perform(post("/api/clients")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(client)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.name").value("Test Name"));

        verify(clientService).createClient(any(Client.class));
    }

    // Additional tests for GET, PUT, DELETE etc.
}
