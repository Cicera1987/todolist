package br.com.ciceraribeiro.todolist.filter;

import java.io.IOException;
import java.util.Base64;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import at.favre.lib.crypto.bcrypt.BCrypt;
import br.com.ciceraribeiro.todolist.user.IUserRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class FilterTaskAuth extends OncePerRequestFilter {

    @Autowired
    private IUserRepository userRepository;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        var servePath = request.getServletPath();
        if (servePath.startsWith("/tasks/")) {

            // pegar a autorização (usuario e senha)
            var authorization = request.getHeader("Authorization");
            var authEncoded = authorization.substring(("Basic".length())).trim();
            byte[] authDecode = Base64.getDecoder().decode(authEncoded);

            var authDecoded = new String(authDecode);
            String[] credentials = authDecoded.split(":");
            String username = credentials[0];
            String password = credentials[1];

            // validar usuario
            var user = this.userRepository.findByUsername(username);
            if (user == null) {
                response.sendError(401);

            } else {
                // validar senha
                var passwordVerify = BCrypt.verifyer().verify(password.toCharArray(), user.getPassword());
                if (passwordVerify.verified) {
                    request.setAttribute("userId", user.getId());
                    filterChain.doFilter(request, response);
                } else {
                    response.sendError(401);
                }
            }
        } else {
            filterChain.doFilter(request, response);
        }

    }

}
