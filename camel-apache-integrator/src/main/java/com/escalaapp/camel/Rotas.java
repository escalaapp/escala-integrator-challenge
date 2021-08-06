package com.escalaapp.camel;

import org.apache.camel.CamelContext;
import org.apache.camel.Exchange;
import org.apache.camel.builder.RouteBuilder;
import org.apache.camel.impl.DefaultCamelContext;

public class Rotas {

    public static void main(String[] args) throws Exception {

        CamelContext context = new DefaultCamelContext();
        context.addRoutes(new RouteBuilder() {
            @Override
            public void configure() throws Exception {
                from("jetty:http://localhost:3002/colaboradores").
                        to("http://localhost:3001/api/colaboradores?bridgeEndpoint=true").
                        log("${id} = ${body}");
            }
        });

        context.start();
    }
}
