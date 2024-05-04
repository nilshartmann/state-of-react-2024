package nh.recipify.domain.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

import java.util.Objects;

@Entity
@Table(name = "ingredients")
public class Ingredient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private Long id;

    @ManyToOne
    @JoinColumn(name = "recipe_id", nullable = false)
    @JsonIgnore
    private Recipe recipe;

    @NotNull
    @Column(nullable = false)
    private String name;
    
    @NotNull
    @Column(nullable = false)
    private Double amount;

    @NotNull
    @Column(nullable = false)
    private String unit;

    @NotNull
    @Column(nullable = false)
    private Integer orderNo;

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Double getAmount() {
        return amount;
    }

    public String getUnit() {
        return unit;
    }

    public Integer getOrderNo() {
        return orderNo;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Ingredient that = (Ingredient) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Ingredient{" + "id=" + id + ", name='" + name + '\'' + ", amount=" + amount + ", unit='" + unit + '\'' + ", orderNo=" + orderNo + '}';
    }
}